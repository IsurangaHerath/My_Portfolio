import { useEffect, useRef } from 'react';

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 0,
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.15s ease, top 0.15s ease',
        top: '50%',
        left: '50%',
      }}
      aria-hidden="true"
    />
  );
}
