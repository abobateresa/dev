import type { EquipmentSlot, TalentBranch } from "@/lib/game-data";

export interface CharacterRow {
  id: number;
  userId: number;
  name: string;
  faction: string;
  race: string;
  className: string;
  level: number;
  exp: number;
  gold: number;
  hp: number;
  mp: number;
  location: string;
  posX: number;
  posY: number;
  talents: Partial<Record<TalentBranch, number>>;
  equipment: Partial<Record<EquipmentSlot, number>>;
  inventory: { potionsHp?: number; potionsMp?: number };
  settings: {
    musicVolume?: number;
    sfxVolume?: number;
    showGrid?: boolean;
    showNames?: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export interface AuthUser {
  id: number;
  username: string;
}
