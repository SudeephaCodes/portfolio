import React, { useEffect, useState } from 'react';

export const BackgroundOrbs: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="orb orb-1"
        style={{
          transform: `translate(${offset.x * 15}px, ${offset.y * 15}px)`,
        }}
      />
      <div
        className="orb orb-2"
        style={{
          transform: `translate(${offset.x * 30}px, ${offset.y * 30}px)`,
        }}
      />
      <div
        className="orb orb-3"
        style={{
          transform: `translate(${offset.x * 45}px, ${offset.y * 45}px)`,
        }}
      />
    </>
  );
};
