"use client";

import { WORLD_MAP, LOCATIONS } from "./world-data";

interface WorldMapProps {
  currentLocation: string;
  onClose: () => void;
  onTravel: (locationId: string) => void;
}

export function WorldMap({ currentLocation, onClose, onTravel }: WorldMapProps) {
  const scale = 0.28;
  const mapW = WORLD_MAP.width * scale;
  const mapH = WORLD_MAP.height * scale;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90">
      <div className="w-full max-w-[920px] rounded-2xl border border-amber-700/60 bg-[#1a140f] p-6 text-white">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-amber-300">Карта мира</h2>
            <p className="text-sm text-amber-400/70">Кликните по локации, чтобы переместиться</p>
          </div>
          <button
            onClick={onClose}
            className="rounded bg-zinc-800 px-4 py-1.5 text-sm hover:bg-zinc-700"
          >
            Закрыть
          </button>
        </div>

        <div
          className="relative mx-auto overflow-hidden rounded-xl border border-amber-900/70 bg-[#0f0b07]"
          style={{ width: mapW, height: mapH }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(#3a2f1f 1px, transparent 1px),
                linear-gradient(90deg, #3a2f1f 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Connections (roads between locations) */}
          {WORLD_MAP.connections.map(([a, b], i) => {
            const locA = WORLD_MAP.locations.find((l) => l.id === a)!;
            const locB = WORLD_MAP.locations.find((l) => l.id === b)!;
            return (
              <svg key={i} className="absolute inset-0 pointer-events-none">
                <line
                  x1={locA.x * scale}
                  y1={locA.y * scale}
                  x2={locB.x * scale}
                  y2={locB.y * scale}
                  stroke="#8b5e2b"
                  strokeWidth="3"
                  strokeOpacity="0.6"
                />
              </svg>
            );
          })}

          {/* Locations */}
          {WORLD_MAP.locations.map((loc) => {
            const isCurrent = loc.id === currentLocation;
            const locData = LOCATIONS[loc.id];

            return (
              <button
                key={loc.id}
                onClick={() => onTravel(loc.id)}
                disabled={isCurrent}
                className={`absolute flex flex-col items-center justify-center rounded-lg border transition-all ${
                  isCurrent
                    ? "border-emerald-400 bg-emerald-900/60 text-emerald-300"
                    : "border-amber-700 bg-[#2a2118] hover:border-amber-400 hover:bg-[#3a2f1f]"
                }`}
                style={{
                  left: loc.x * scale - 42,
                  top: loc.y * scale - 28,
                  width: 84,
                  height: 56,
                }}
              >
                <div className="text-xs font-bold tracking-wider">{loc.name}</div>
                {isCurrent && (
                  <div className="text-[9px] text-emerald-400">ВЫ ЗДЕСЬ</div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-4 text-center text-xs text-amber-400/60">
          Всего локаций: {WORLD_MAP.locations.length} • Нажмите на локацию для быстрого перемещения
        </div>
      </div>
    </div>
  );
}