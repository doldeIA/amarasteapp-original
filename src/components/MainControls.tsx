import React, { useState } from "react";

export type MainControlsProps = {
  onOpenDownloads?: () => void;
  onOpenBooker?: () => void;
  onOpenSignUp?: () => void;
  onNavigateHome?: () => void;
};

const MainControls: React.FC<MainControlsProps> = ({
  onOpenDownloads,
  onOpenBooker,
  onOpenSignUp,
  onNavigateHome,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto flex items-center gap-3 p-3 bg-black/40 rounded-md backdrop-blur-sm border border-white/6">
      {/* Play / Pause */}
      <button
        onClick={() => setIsPlaying((p) => !p)}
        className="px-3 py-2 rounded-md bg-white/8 hover:bg-white/16 text-white transition"
        aria-pressed={isPlaying}
      >
        {isPlaying ? "Pausar" : "Tocar"}
      </button>

      {/* Volume */}
      <div className="flex items-center gap-2">
        <input
          aria-label="Volume"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={muted ? 0 : volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-36"
        />
        <button
          onClick={() => setMuted((m) => !m)}
          className="text-sm text-white/80"
        >
          {muted ? "Som ligado" : "Mudo"}
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onOpenDownloads?.()}
          className="px-3 py-2 rounded-md bg-[#FF8345] text-white hover:brightness-95 transition"
        >
          Downloads
        </button>

        <button
          onClick={() => onOpenBooker?.()}
          className="px-3 py-2 rounded-md bg-white/8 text-white hover:bg-white/16 transition"
        >
          Booker
        </button>

        <button
          onClick={() => onOpenSignUp?.()}
          className="px-3 py-2 rounded-md border border-white/10 text-white hover:bg-white/6 transition"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default MainControls;
