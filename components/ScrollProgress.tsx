'use client';

import { useScrollProgress } from '@/lib/hooks/useScrollAnimation';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
      <div
        className="h-full bg-gradient-to-r from-gaming-accent to-gaming-purple transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
