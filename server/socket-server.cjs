const http = require('http');
const { Server } = require('socket.io');

const port = Number(process.env.MULTIPLAYER_PORT || 3101);
const server = http.createServer();
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
  path: '/api/socket',
});

const rooms = new Map();

function getRoom(locationId) {
  if (!rooms.has(locationId)) {
    rooms.set(locationId, new Map());
  }
  return rooms.get(locationId);
}

function emitInitialState(socket, room, locationId) {
  socket.join(locationId);
  socket.emit('initial_state', {
    players: Array.from(room.values()),
    mobs: [],
  });
}

io.on('connection', (socket) => {
  console.log(`[MP] Socket client connected: ${socket.id}`);

  socket.on('join_location', ({ locationId, playerData }) => {
    const room = getRoom(locationId);
    const player = {
      id: socket.id,
      ...playerData,
      lastUpdate: Date.now(),
    };

    room.set(socket.id, player);
    emitInitialState(socket, room, locationId);
    io.to(locationId).emit('player_joined', player);
  });

  socket.on('player_state_update', (playerData) => {
    const locationId = playerData?.location;
    if (!locationId) return;

    const room = getRoom(locationId);
    const player = room.get(socket.id);
    if (!player) return;

    const updated = {
      ...player,
      ...playerData,
      id: socket.id,
      lastUpdate: Date.now(),
    };

    room.set(socket.id, updated);
    io.to(locationId).emit('player_moved', {
      id: socket.id,
      x: updated.x,
      y: updated.y,
      location: updated.location,
    });
  });

  socket.on('player_move', ({ x, y }) => {
    let foundRoom = null;
    for (const [locationId, room] of rooms.entries()) {
      if (room.has(socket.id)) {
        foundRoom = { locationId, room };
        break;
      }
    }

    if (!foundRoom) return;

    const { locationId, room } = foundRoom;
    const player = room.get(socket.id);
    if (!player) return;

    const updated = { ...player, x, y, lastUpdate: Date.now() };
    room.set(socket.id, updated);
    io.to(locationId).emit('player_moved', { id: socket.id, x, y, location: updated.location });
  });

  socket.on('disconnect', () => {
    for (const [locationId, room] of rooms.entries()) {
      if (room.has(socket.id)) {
        room.delete(socket.id);
        io.to(locationId).emit('player_left', socket.id);
        break;
      }
    }
    console.log(`[MP] Socket client disconnected: ${socket.id}`);
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`[MP] Socket server listening on port ${port}`);
});
