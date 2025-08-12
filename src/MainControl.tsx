// src/components/MainControls.tsx
import React from 'react';

type Props = {
  onAccess?: () => void;
  onNavigate?: (screen: string) => void;
  className?: string;
  [k: string]: any; // aceita props extras do App
};

const MainControls: React.FC<Props> = ({ onAccess, onNavigate, className }) => {
  return (
    <div className={`w-full max-w-xl mx-auto p-4 flex gap-3 items-center ${className || ''}`}>
      <button
        onClick={() => (onAccess ? onAccess() : null)}
        className="bg-primary text-white px-4 py-2 rounded-md shadow hover:scale-[0.99] transition"
        aria-label="Acessar"
      >
        ACESSAR
      </button>

      <button
        onClick={() => (onNavigate ? onNavigate('downloads') : null)}
        className="bg-white/10 text-white px-3 py-2 rounded-md border border-white/20"
      >
        Downloads
      </button>

      <button
        onClick={() => (onNavigate ? onNavigate('booker') : null)}
        className="bg-white/10 text-white px-3 py-2 rounded-md border border-white/20"
      >
        Booker
      </button>
    </div>
  );
};

export default MainControls;
