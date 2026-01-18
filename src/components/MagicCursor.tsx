import { useEffect, useState, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  type: 'sparkle' | 'star' | 'circle';
  velocityX?: number;
  velocityY?: number;
  isBurst?: boolean;
}

const MagicCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [wandRotation, setWandRotation] = useState(0);

  const createParticle = useCallback((x: number, y: number, isBurst = false): Particle => {
    const types: ('sparkle' | 'star' | 'circle')[] = ['sparkle', 'star', 'circle'];
    const angle = Math.random() * Math.PI * 2;
    const speed = isBurst ? Math.random() * 8 + 4 : 0;
    
    return {
      id: Date.now() + Math.random(),
      x: x + (Math.random() - 0.5) * (isBurst ? 10 : 30),
      y: y + (Math.random() - 0.5) * (isBurst ? 10 : 30),
      size: isBurst ? Math.random() * 12 + 6 : Math.random() * 8 + 4,
      opacity: 1,
      rotation: Math.random() * 360,
      type: types[Math.floor(Math.random() * types.length)],
      velocityX: isBurst ? Math.cos(angle) * speed : 0,
      velocityY: isBurst ? Math.sin(angle) * speed : 0,
      isBurst,
    };
  }, []);

  const createBurstParticles = useCallback((x: number, y: number) => {
    const burstParticles: Particle[] = [];
    for (let i = 0; i < 15; i++) {
      burstParticles.push(createParticle(x, y, true));
    }
    setParticles(prev => [...prev, ...burstParticles]);
  }, [createParticle]);

  useEffect(() => {
    let particleInterval: NodeJS.Timeout;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setWandRotation(angle + 45);

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleClick = (e: MouseEvent) => {
      createBurstParticles(e.clientX, e.clientY);
    };

    particleInterval = setInterval(() => {
      if (isVisible) {
        setParticles(prev => {
          const newParticles = [...prev];
          if (newParticles.filter(p => !p.isBurst).length < 20) {
            newParticles.push(createParticle(mousePos.x, mousePos.y));
          }
          return newParticles
            .map(p => ({
              ...p,
              opacity: p.opacity - (p.isBurst ? 0.03 : 0.05),
              x: p.x + (p.velocityX || 0),
              y: p.y + (p.velocityY || 0) - (p.isBurst ? 0 : 1),
              velocityX: (p.velocityX || 0) * 0.95,
              velocityY: (p.velocityY || 0) * 0.95 + (p.isBurst ? 0.2 : 0),
            }))
            .filter(p => p.opacity > 0);
        });
      }
    }, 50);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("click", handleClick);
      clearInterval(particleInterval);
    };
  }, [isVisible, mousePos.x, mousePos.y, createParticle, createBurstParticles]);

  const renderParticle = (particle: Particle) => {
    const baseStyle = {
      left: particle.x,
      top: particle.y,
      opacity: particle.opacity,
      transform: `translate(-50%, -50%) rotate(${particle.rotation}deg) scale(${particle.isBurst ? 1 + (1 - particle.opacity) * 0.5 : 1})`,
    };

    if (particle.type === 'star') {
      return (
        <svg
          key={particle.id}
          className="fixed pointer-events-none z-[9998]"
          style={{ ...baseStyle, width: particle.size, height: particle.size }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2L14 9L21 9L15.5 13.5L17.5 21L12 16.5L6.5 21L8.5 13.5L3 9L10 9L12 2Z"
            fill={particle.isBurst ? "#FF69B4" : "url(#starGradient)"}
            filter="url(#glow)"
          />
          <defs>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB6C1" />
              <stop offset="100%" stopColor="#FF69B4" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      );
    }

    if (particle.type === 'sparkle') {
      return (
        <svg
          key={particle.id}
          className="fixed pointer-events-none z-[9998]"
          style={{ ...baseStyle, width: particle.size * 1.5, height: particle.size * 1.5 }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 0L13 10L24 12L13 14L12 24L11 14L0 12L11 10L12 0Z"
            fill={particle.isBurst ? "#FFD1DC" : "#FFC0CB"}
            opacity="0.9"
          />
        </svg>
      );
    }

    return (
      <div
        key={particle.id}
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          ...baseStyle,
          width: particle.size,
          height: particle.size,
          background: particle.isBurst 
            ? `radial-gradient(circle, rgba(255,105,180,1) 0%, rgba(255,182,193,0.5) 100%)`
            : `radial-gradient(circle, rgba(255,182,193,1) 0%, rgba(255,105,180,0.5) 100%)`,
          boxShadow: particle.isBurst 
            ? '0 0 10px 4px rgba(255,105,180,0.7)' 
            : '0 0 6px 2px rgba(255,182,193,0.6)',
        }}
      />
    );
  };

  if (!isVisible) return null;

  return (
    <>
      {particles.map(renderParticle)}

      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          width: 60,
          height: 60,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255,182,193,0.3) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />

      <div
        className="fixed pointer-events-none z-[10000] transition-transform duration-75"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: `translate(-5px, -5px) rotate(${wandRotation}deg)`,
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="drop-shadow-lg">
          <defs>
            <linearGradient id="wandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD1DC" />
              <stop offset="50%" stopColor="#FFB6C1" />
              <stop offset="100%" stopColor="#FF69B4" />
            </linearGradient>
            <linearGradient id="starTipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF" />
              <stop offset="50%" stopColor="#FFD1DC" />
              <stop offset="100%" stopColor="#FF69B4" />
            </linearGradient>
            <filter id="wandGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="starGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect
            x="20"
            y="20"
            width="28"
            height="4"
            rx="2"
            fill="url(#wandGradient)"
            filter="url(#wandGlow)"
            transform="rotate(-45 20 20)"
          />

          <rect
            x="30"
            y="19"
            width="3"
            height="6"
            rx="1"
            fill="#FFF"
            opacity="0.7"
            transform="rotate(-45 20 20)"
          />

          <g filter="url(#starGlow)">
            <path
              d="M8 8 L10 4 L12 8 L16 6 L12 10 L14 14 L10 12 L6 14 L8 10 L4 6 Z"
              fill="url(#starTipGradient)"
              stroke="#FF69B4"
              strokeWidth="0.5"
            />
            <circle cx="10" cy="9" r="2" fill="#FFF" opacity="0.8" />
          </g>

          <g opacity="0.6" className="animate-pulse">
            <line x1="10" y1="2" x2="10" y2="0" stroke="#FFB6C1" strokeWidth="1" strokeLinecap="round" />
            <line x1="16" y1="5" x2="18" y2="3" stroke="#FFB6C1" strokeWidth="1" strokeLinecap="round" />
            <line x1="4" y1="5" x2="2" y2="3" stroke="#FFB6C1" strokeWidth="1" strokeLinecap="round" />
            <line x1="3" y1="12" x2="1" y2="12" stroke="#FFB6C1" strokeWidth="1" strokeLinecap="round" />
            <line x1="17" y1="12" x2="19" y2="12" stroke="#FFB6C1" strokeWidth="1" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: mousePos.x - 15,
          top: mousePos.y - 15,
          width: 30,
          height: 30,
          background: 'radial-gradient(circle, rgba(255,192,203,0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'shimmer 0.5s ease-out forwards',
        }}
      />
    </>
  );
};

export default MagicCursor;
