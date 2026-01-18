import { useEffect, useState, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  type: 'sparkle' | 'star' | 'circle';
}

const MagicCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [wandRotation, setWandRotation] = useState(0);

  const createParticle = useCallback((x: number, y: number): Particle => {
    const types: ('sparkle' | 'star' | 'circle')[] = ['sparkle', 'star', 'circle'];
    return {
      id: Date.now() + Math.random(),
      x: x + (Math.random() - 0.5) * 30,
      y: y + (Math.random() - 0.5) * 30,
      size: Math.random() * 8 + 4,
      opacity: 1,
      rotation: Math.random() * 360,
      type: types[Math.floor(Math.random() * types.length)],
    };
  }, []);

  useEffect(() => {
    let particleInterval: NodeJS.Timeout;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Calculate wand rotation based on movement direction
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

    // Create particles on interval when mouse is moving
    particleInterval = setInterval(() => {
      if (isVisible) {
        setParticles(prev => {
          const newParticles = [...prev];
          // Add new particle
          if (newParticles.length < 20) {
            newParticles.push(createParticle(mousePos.x, mousePos.y));
          }
          // Fade and remove old particles
          return newParticles
            .map(p => ({ ...p, opacity: p.opacity - 0.05, y: p.y - 1 }))
            .filter(p => p.opacity > 0);
        });
      }
    }, 50);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearInterval(particleInterval);
    };
  }, [isVisible, mousePos.x, mousePos.y, createParticle]);

  const renderParticle = (particle: Particle) => {
    const baseStyle = {
      left: particle.x,
      top: particle.y,
      opacity: particle.opacity,
      transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
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
            fill="url(#starGradient)"
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
            fill="#FFC0CB"
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
          background: `radial-gradient(circle, rgba(255,182,193,1) 0%, rgba(255,105,180,0.5) 100%)`,
          boxShadow: '0 0 6px 2px rgba(255,182,193,0.6)',
        }}
      />
    );
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Particles Trail */}
      {particles.map(renderParticle)}

      {/* Glow Ring around cursor */}
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

      {/* Magic Wand */}
      <div
        className="fixed pointer-events-none z-[10000] transition-transform duration-75"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: `translate(-5px, -5px) rotate(${wandRotation}deg)`,
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="drop-shadow-lg">
          {/* Wand glow effect */}
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

          {/* Wand handle */}
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

          {/* Wand decorative bands */}
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

          {/* Star tip */}
          <g filter="url(#starGlow)">
            <path
              d="M8 8 L10 4 L12 8 L16 6 L12 10 L14 14 L10 12 L6 14 L8 10 L4 6 Z"
              fill="url(#starTipGradient)"
              stroke="#FF69B4"
              strokeWidth="0.5"
            />
            {/* Inner star glow */}
            <circle cx="10" cy="9" r="2" fill="#FFF" opacity="0.8" />
          </g>

          {/* Sparkle rays from star */}
          <g opacity="0.6" className="animate-pulse">
            <line x1="10" y1="2" x2="10" y2="0" stroke="#FFB6C1" strokeWidth="1" strokeLinecap="round" />
            <line x1="16" y1="5" x2="18" y2="3" stroke="#FFB6C1" strokeWidth="1" strokeLinecap="round" />
            <line x1="4" y1="5" x2="2" y2="3" stroke="#FFB6C1" strokeWidth="1" strokeLinecap="round" />
            <line x1="3" y1="12" x2="1" y2="12" stroke="#FFB6C1" strokeWidth="1" strokeLinecap="round" />
            <line x1="17" y1="12" x2="19" y2="12" stroke="#FFB6C1" strokeWidth="1" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* Shimmer trail effect */}
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
