import { createServer } from "http";
import { Server } from "socket.io";
import type { Server as HTTPServer } from "http";
import { LOCATIONS } from "@/components/game/world-data";
import type { MonsterDef } from "@/lib/game-data";

// ==================== TYPES ====================

export interface PlayerState {
  id: string;
  name: string;
  className: string;
  level: number;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  facing: number;
  location: string;
  lastUpdate: number;
}

export interface MobState {
  spawnId: string;
  defId: string;
  name: string;
  level: number;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  alive: boolean;
  aggroed: boolean;
  targetPlayerId: string | null;
  lastAttackAt: number;
  respawnAt: number | null;
}

export interface GameRoom {
  locationId: string;
  players: Map<string, PlayerState>;
  mobs: Map<string, MobState>;
  lastTick: number;
}

// ==================== GAME SERVER ====================

class GameServer {
  private io: Server;
  private httpServer: HTTPServer;
  private rooms: Map<string, GameRoom> = new Map();
  private tickInterval: NodeJS.Timeout | null = null;

  constructor(httpServer?: HTTPServer) {
    this.httpServer = httpServer ?? createServer();
    this.io = new Server(this.httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
      path: "/api/socket",
    });

    this.setupSocketHandlers();
    this.startGameLoop();

    if (!httpServer) {
      const port = Number(process.env.MULTIPLAYER_PORT ?? 3101);
      this.httpServer.listen(port, "0.0.0.0", () => {
        console.log(`[MP] Socket server listening on port ${port}`);
      });
    }
  }

  private setupSocketHandlers() {
    this.io.on("connection", (socket) => {
      console.log(`[MP] Player connected: ${socket.id}`);

      // Join location room
      socket.on("join_location", ({ locationId, playerData }: { 
        locationId: string; 
        playerData: Omit<PlayerState, "id" | "lastUpdate"> 
      }) => {
        this.joinPlayerToLocation(socket.id, locationId, playerData);
      });

      // Player movement
      socket.on("player_move", ({ x, y }: { x: number; y: number }) => {
        this.handlePlayerMove(socket.id, x, y);
      });

      socket.on("player_state_update", (playerData: Partial<PlayerState>) => {
        this.handlePlayerStateUpdate(socket.id, playerData);
      });

      // Player attacks mob
      socket.on("attack_mob", ({ mobId }: { mobId: string }) => {
        this.handleAttackMob(socket.id, mobId);
      });

      // Use ability
      socket.on("use_ability", ({ abilityId, targetId }: { abilityId: string; targetId?: string }) => {
        this.handleUseAbility(socket.id, abilityId, targetId);
      });

      // Disconnect
      socket.on("disconnect", () => {
        this.removePlayer(socket.id);
        console.log(`[MP] Player disconnected: ${socket.id}`);
      });
    });
  }

  private joinPlayerToLocation(
    socketId: string, 
    locationId: string, 
    playerData: Omit<PlayerState, "id" | "lastUpdate">
  ) {
    // Leave previous rooms
    for (const room of this.rooms.values()) {
      room.players.delete(socketId);
    }

    if (!this.rooms.has(locationId)) {
      this.createRoom(locationId);
    }

    const room = this.rooms.get(locationId)!;

    const player: PlayerState = {
      id: socketId,
      ...playerData,
      lastUpdate: Date.now(),
    };

    room.players.set(socketId, player);

    // Send initial state to player
    const socket = this.io.sockets.sockets.get(socketId);
    if (socket) {
      socket.join(locationId);

      socket.emit("initial_state", {
        players: Array.from(room.players.values()),
        mobs: Array.from(room.mobs.values()),
      });
    }

    // Broadcast new player to others in room
    this.io.to(locationId).emit("player_joined", player);
  }

  private handlePlayerStateUpdate(socketId: string, playerData: Partial<PlayerState>) {
    for (const room of this.rooms.values()) {
      const player = room.players.get(socketId);
      if (!player) continue;

      const updatedPlayer: PlayerState = {
        ...player,
        ...playerData,
        id: socketId,
        lastUpdate: Date.now(),
      };

      room.players.set(socketId, updatedPlayer);

      const hasPositionChange = typeof playerData.x === "number" || typeof playerData.y === "number" || typeof playerData.location === "string";
      if (hasPositionChange) {
        this.io.to(room.locationId).emit("player_moved", {
          id: socketId,
          x: updatedPlayer.x,
          y: updatedPlayer.y,
          location: updatedPlayer.location,
        });
      }

      break;
    }
  }

  private createRoom(locationId: string) {
    const location = LOCATIONS[locationId];
    if (!location) return;

    const mobs = new Map<string, MobState>();

    for (const spawn of location.monsterSpawns) {
      mobs.set(spawn.id, {
        spawnId: spawn.id,
        defId: spawn.monster.id,
        name: spawn.monster.name,
        level: spawn.monster.level,
        x: spawn.x,
        y: spawn.y,
        hp: spawn.monster.maxHp,
        maxHp: spawn.monster.maxHp,
        alive: true,
        aggroed: false,
        targetPlayerId: null,
        lastAttackAt: 0,
        respawnAt: null,
      });
    }

    this.rooms.set(locationId, {
      locationId,
      players: new Map(),
      mobs,
      lastTick: Date.now(),
    });

    console.log(`[MP] Created room for location: ${locationId}`);
  }

  private handlePlayerMove(socketId: string, x: number, y: number) {
    for (const room of this.rooms.values()) {
      const player = room.players.get(socketId);
      if (player) {
        player.x = x;
        player.y = y;
        player.lastUpdate = Date.now();

        // Broadcast to others in the same room
        this.io.to(room.locationId).emit("player_moved", {
          id: socketId,
          x,
          y,
        });
        break;
      }
    }
  }

  private handleAttackMob(socketId: string, mobId: string) {
    for (const room of this.rooms.values()) {
      const player = room.players.get(socketId);
      const mob = room.mobs.get(mobId);

      if (player && mob && mob.alive) {
        // Simple damage calculation (can be improved later)
        const damage = Math.floor(Math.random() * 25) + 15;
        mob.hp = Math.max(0, mob.hp - damage);

        if (mob.hp <= 0) {
          mob.alive = false;
          mob.respawnAt = Date.now() + 9000;
          mob.aggroed = false;
          mob.targetPlayerId = null;
        } else {
          mob.aggroed = true;
          mob.targetPlayerId = socketId;
        }

        // Broadcast mob update
        this.io.to(room.locationId).emit("mob_updated", {
          spawnId: mob.spawnId,
          hp: mob.hp,
          alive: mob.alive,
          aggroed: mob.aggroed,
        });

        // Broadcast damage number
        this.io.to(room.locationId).emit("damage_number", {
          x: mob.x,
          y: mob.y,
          damage,
          isPlayer: false,
        });
      }
    }
  }

  private handleUseAbility(socketId: string, abilityId: string, targetId?: string) {
    // Placeholder for ability handling
    console.log(`[MP] Player ${socketId} used ability ${abilityId}`);
  }

  private removePlayer(socketId: string) {
    for (const room of this.rooms.values()) {
      if (room.players.has(socketId)) {
        room.players.delete(socketId);
        this.io.to(room.locationId).emit("player_left", socketId);
        break;
      }
    }
  }

  // ==================== GAME LOOP ====================

  private startGameLoop() {
    if (this.tickInterval) clearInterval(this.tickInterval);

    this.tickInterval = setInterval(() => {
      this.tick();
    }, 100); // 10 ticks per second
  }

  private tick() {
    const now = Date.now();

    for (const room of this.rooms.values()) {
      // Mob AI and respawn
      for (const mob of room.mobs.values()) {
        if (!mob.alive) {
          if (mob.respawnAt && now >= mob.respawnAt) {
            mob.alive = true;
            mob.hp = mob.maxHp;
            mob.x = this.getSpawnPosition(room.locationId, mob.spawnId).x;
            mob.y = this.getSpawnPosition(room.locationId, mob.spawnId).y;
            mob.aggroed = false;
            mob.targetPlayerId = null;
            mob.respawnAt = null;

            this.io.to(room.locationId).emit("mob_updated", {
              spawnId: mob.spawnId,
              hp: mob.hp,
              alive: true,
              x: mob.x,
              y: mob.y,
            });
          }
          continue;
        }

        // Simple mob AI (chase nearest player)
        if (mob.aggroed && mob.targetPlayerId) {
          const target = room.players.get(mob.targetPlayerId);
          if (target) {
            const dx = target.x - mob.x;
            const dy = target.y - mob.y;
            const dist = Math.hypot(dx, dy);

            if (dist > 60 && dist < 400) {
              const speed = 1.8;
              mob.x += (dx / dist) * speed;
              mob.y += (dy / dist) * speed;

              this.io.to(room.locationId).emit("mob_moved", {
                spawnId: mob.spawnId,
                x: mob.x,
                y: mob.y,
              });
            }
          }
        }
      }

      // Broadcast full state every ~500ms
      if (now - room.lastTick > 500) {
        this.io.to(room.locationId).emit("full_state_update", {
          players: Array.from(room.players.values()),
          mobs: Array.from(room.mobs.values()),
        });
        room.lastTick = now;
      }
    }
  }

  private getSpawnPosition(locationId: string, spawnId: string) {
    const location = LOCATIONS[locationId];
    const spawn = location?.monsterSpawns.find((s) => s.id === spawnId);
    return spawn ? { x: spawn.x, y: spawn.y } : { x: 500, y: 500 };
  }

  public getIO() {
    return this.io;
  }
}

let gameServer: GameServer | null = null;

export function getGameServer(httpServer?: HTTPServer) {
  if (!gameServer && httpServer) {
    gameServer = new GameServer(httpServer);
  }
  return gameServer;
}

export default GameServer;
