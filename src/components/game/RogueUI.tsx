"use client";

interface RogueResourceBarProps {
  energy: number;
  maxEnergy: number;
  comboPoints: number;
}

export function RogueResourceBar({ energy, maxEnergy, comboPoints }: RogueResourceBarProps) {
  return (
    <div className="flex items-center gap-4 px-5 py-1.5 bg-black/70 rounded-2xl border border-purple-900/70 shadow-inner">
      {/* Energy */}
      <div className="flex items-center gap-2 min-w-[140px]">
        <div className="text-xs font-bold text-purple-400 w-8">NRG</div>
        <div className="flex-1 h-2.5 bg-purple-950 rounded-full overflow-hidden border border-purple-800">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 transition-all duration-200" 
            style={{ width: `${Math.max(0, Math.min(100, (energy / maxEnergy) * 100))}%` }} 
          />
        </div>
        <div className="text-xs font-mono text-purple-300 w-8 tabular-nums text-right">
          {Math.floor(energy)}
        </div>
      </div>

      {/* Combo Points */}
      <div className="flex items-center gap-2">
        <div className="text-xs font-bold text-purple-400">CP</div>
        <div className="flex gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-4 h-4 rounded-full border-2 transition-all duration-150 ${
                i < comboPoints 
                  ? "bg-purple-500 border-purple-300 shadow-[0_0_8px_#c084fc]" 
                  : "bg-purple-950 border-purple-900"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
