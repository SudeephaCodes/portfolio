import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const crosshairRef = useRef<HTMLDivElement>(null);

  const mouseCoords = useRef({ x: -100, y: -100 });
  const dotCoords = useRef({ x: -100, y: -100 });
  const crosshairCoords = useRef({ x: -100, y: -100 });

  // Outer ring coordinates, dimensions, and border-radius
  const ringCoords = useRef({ x: -100, y: -100, w: 32, h: 32, r: 50 });

  // Bounding rect details of hovered item for magnetic snap
  const hoveredRectRef = useRef<{
    x: number;
    y: number;
    w: number;
    h: number;
    r: number;
  } | null>(null);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let animFrameId: number;
    const updatePosition = () => {
      // 1. Inner Dot: quick tracking
      dotCoords.current.x += (mouseCoords.current.x - dotCoords.current.x) * 0.35;
      dotCoords.current.y += (mouseCoords.current.y - dotCoords.current.y) * 0.35;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotCoords.current.x}px`;
        dotRef.current.style.top = `${dotCoords.current.y}px`;
        dotRef.current.style.opacity = '1';
      }

      // 2. Crosshair: medium speed tracking
      crosshairCoords.current.x += (mouseCoords.current.x - crosshairCoords.current.x) * 0.25;
      crosshairCoords.current.y += (mouseCoords.current.y - crosshairCoords.current.y) * 0.25;

      if (crosshairRef.current) {
        crosshairRef.current.style.left = `${crosshairCoords.current.x}px`;
        crosshairRef.current.style.top = `${crosshairCoords.current.y}px`;
        crosshairRef.current.style.opacity = '1';
      }

      // 3. Outer Ring: snap to element if hovered, else track mouse
      let targetX = mouseCoords.current.x;
      let targetY = mouseCoords.current.y;
      let targetW = 32;
      let targetH = 32;
      let targetR = 50;

      if (hoveredRectRef.current) {
        targetX = hoveredRectRef.current.x;
        targetY = hoveredRectRef.current.y;
        targetW = hoveredRectRef.current.w + 14;
        targetH = hoveredRectRef.current.h + 10;
        targetR = hoveredRectRef.current.r;
      }

      // Spring-like smooth lerping
      ringCoords.current.x += (targetX - ringCoords.current.x) * 0.15;
      ringCoords.current.y += (targetY - ringCoords.current.y) * 0.15;
      ringCoords.current.w += (targetW - ringCoords.current.w) * 0.18;
      ringCoords.current.h += (targetH - ringCoords.current.h) * 0.18;
      ringCoords.current.r += (targetR - ringCoords.current.r) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringCoords.current.x}px`;
        ringRef.current.style.top = `${ringCoords.current.y}px`;
        ringRef.current.style.width = `${ringCoords.current.w}px`;
        ringRef.current.style.height = `${ringCoords.current.h}px`;
        ringRef.current.style.borderRadius = hoveredRectRef.current ? `${ringCoords.current.r}px` : '50%';
        ringRef.current.style.opacity = '1';
      }

      animFrameId = requestAnimationFrame(updatePosition);
    };

    animFrameId = requestAnimationFrame(updatePosition);

    const setupHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        'a, button, .gradient-card, .skill-tag, .social-link, .ide-file-item, .ide-tab, [role="button"]'
      );

      const onEnter = (e: Event) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        // Get CSS border-radius and parse to float pixels
        const styles = window.getComputedStyle(target);
        const radiusString = styles.borderRadius || '0px';
        const radiusNum = parseFloat(radiusString) || 8;

        hoveredRectRef.current = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          w: rect.width,
          h: rect.height,
          r: radiusNum,
        };

        if (ringRef.current) ringRef.current.classList.add('hovering');
        if (dotRef.current) dotRef.current.classList.add('hovering');
        if (crosshairRef.current) crosshairRef.current.classList.add('hovering');
      };

      const onLeave = () => {
        hoveredRectRef.current = null;
        if (ringRef.current) ringRef.current.classList.remove('hovering');
        if (dotRef.current) dotRef.current.classList.remove('hovering');
        if (crosshairRef.current) crosshairRef.current.classList.remove('hovering');
      };

      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });

      return () => {
        hoverables.forEach((el) => {
          el.removeEventListener('mouseenter', onEnter);
          el.removeEventListener('mouseleave', onLeave);
        });
      };
    };

    let cleanupHover: () => void = () => {};
    const timeoutId = setTimeout(() => {
      cleanupHover = setupHoverListeners();
    }, 100);

    const observer = new MutationObserver(() => {
      cleanupHover();
      cleanupHover = setupHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrameId);
      clearTimeout(timeoutId);
      cleanupHover();
      observer.disconnect();
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={crosshairRef} className="cursor-crosshair" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};
