"use client";

import { useRef, useCallback } from "react";

export function useSound(volumeRef: React.MutableRefObject<number>) {
  const ctxRef = useRef<AudioContext | null>(null);

  const ensureCtx = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!ctxRef.current) {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) return null;
      ctxRef.current = new Ctor();
    }
    if (ctxRef.current.state === "suspended") {
      ctxRef.current.resume().catch(() => {});
    }
    return ctxRef.current;
  }, []);

  const beep = useCallback(
    (freq: number, durationMs: number, type: OscillatorType = "sine") => {
      const vol = volumeRef.current;
      if (vol <= 0) return;
      const ctx = ensureCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.value = (vol / 100) * 0.18;
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + durationMs / 1000);
      osc.start(now);
      osc.stop(now + durationMs / 1000);
    },
    [ensureCtx, volumeRef],
  );

  return {
    playHit: () => beep(220, 120, "square"),
    playCast: () => beep(520, 140, "sine"),
    playHeal: () => beep(760, 160, "sine"),
    playLevelUp: () => beep(880, 400, "triangle"),
    playError: () => beep(140, 140, "sawtooth"),
    playClick: () => beep(340, 60, "square"),
  };
}
