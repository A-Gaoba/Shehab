import React, { useEffect, useState, useCallback, useMemo } from 'react';
import SnowflakePatterns from './SnowflakePatterns';
import { useSnowfall } from '../contexts/SnowfallContext';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
  sway: number;
  swaySpeed: number;
  type: 'simple' | 'detailed' | 'crystal' | 'stellar' | 'dendrite';
  vx: number; // velocity x for mouse interaction
  vy: number; // velocity y for mouse interaction
  mass: number; // mass for physics
}

interface SnowfallWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SnowfallWrapper: React.FC<SnowfallWrapperProps> = ({
  children,
  className = '',
}) => {
  const { settings } = useSnowfall();
  const { enabled, intensity } = settings;
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseInfluence, setMouseInfluence] = useState(0);
  const [windStrength, setWindStrength] = useState(0);
  const [turbulence, setTurbulence] = useState(0);
  const [performanceMode, setPerformanceMode] = useState(false);

  // Performance optimization: Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Performance monitoring and adaptive optimization
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();

    const checkPerformance = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setPerformanceMode(fps < 30); // Enable performance mode if FPS drops below 30
        frameCount = 0;
        lastTime = currentTime;
      }

      if (enabled && !isReducedMotion) {
        requestAnimationFrame(checkPerformance);
      }
    };

    if (enabled && !isReducedMotion) {
      requestAnimationFrame(checkPerformance);
    }
  }, [enabled, isReducedMotion]);

  // Generate snowflakes based on intensity and device performance
  const generateSnowflakes = useCallback(() => {
    if (!enabled || isReducedMotion) return [];

    const intensityMap = {
      light: { count: performanceMode ? 40 : 80, maxSize: 4, maxSpeed: 3 },
      medium: { count: performanceMode ? 75 : 150, maxSize: 6, maxSpeed: 4 },
      heavy: { count: performanceMode ? 150 : 300, maxSize: 8, maxSpeed: 5 },
    };

    const config = intensityMap[intensity];
    const isMobile = window.innerWidth < 768;
    const adjustedCount = isMobile ? Math.floor(config.count * 0.6) : config.count;

    const flakes: Snowflake[] = [];

    for (let i = 0; i < adjustedCount; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * config.maxSize + 1,
        speed: Math.random() * config.maxSpeed + 0.5,
        opacity: Math.random() * 0.8 + 0.3,
        delay: Math.random() * 15,
        sway: Math.random() * 4 - 2,
        swaySpeed: Math.random() * 1.0 + 0.2,
        type: Math.random() > 0.8 ? 'dendrite' : Math.random() > 0.6 ? 'stellar' : Math.random() > 0.4 ? 'detailed' : Math.random() > 0.2 ? 'crystal' : 'simple',
        vx: 0,
        vy: 0,
        mass: Math.random() * 0.5 + 0.5, // mass between 0.5 and 1
      });
    }

    return flakes;
  }, [enabled, intensity, isReducedMotion, performanceMode]);

  // Initialize snowflakes
  useEffect(() => {
    if (!enabled || isReducedMotion) return;

    const flakes = generateSnowflakes();
    setSnowflakes(flakes);

    // Regenerate snowflakes on window resize for responsive behavior
    const handleResize = () => {
      const newFlakes = generateSnowflakes();
      setSnowflakes(newFlakes);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [enabled, intensity, isReducedMotion, generateSnowflakes]);

  // Performance optimization: Pause animation when not visible
  useEffect(() => {
    if (!enabled || isReducedMotion) return;

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = ((e.clientY + window.scrollY) / (document.documentElement.scrollHeight || window.innerHeight)) * 100;
      setMousePosition({ x, y });
      setMouseInfluence(1);

      // Fade out mouse influence after movement stops
      setTimeout(() => setMouseInfluence(0), 2000);
    };

    // Add realistic wind and turbulence effects (optimized for performance)
    const windInterval = setInterval(() => {
      if (!performanceMode) {
        setWindStrength(Math.sin(Date.now() * 0.001) * 2 + Math.random() * 1.5 - 0.75);
        setTurbulence(Math.cos(Date.now() * 0.0015) * 1.5 + Math.random() * 1 - 0.5);
      } else {
        // Simplified wind effects in performance mode
        setWindStrength(Math.sin(Date.now() * 0.002) * 1);
        setTurbulence(0);
      }
    }, performanceMode ? 200 : 100);

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      clearInterval(windInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enabled, isReducedMotion]);

  // Render realistic snowflake SVG using the patterns component
  const renderSnowflake = (flake: Snowflake) => {
    return (
      <SnowflakePatterns
        size={flake.size}
        opacity={flake.opacity}
        type={flake.type}
        className={`snowflake-${flake.type}`}
      />
    );
  };

  // Calculate realistic physics effects on snowflakes
  const calculateRealisticEffects = (flake: Snowflake) => {
    // Mouse wave influence
    const distance = Math.sqrt(
      Math.pow(flake.x - mousePosition.x, 2) +
      Math.pow(flake.y - mousePosition.y, 2)
    );
    const maxDistance = 25; // Influence radius
    const mouseEffect = Math.max(0, 1 - distance / maxDistance) * mouseInfluence;

    // Wind effects based on mass and size
    const windEffect = windStrength * (1 / flake.mass) * 0.8;
    const turbulenceEffect = turbulence * (1 / flake.mass) * 0.5;

    // Combined horizontal movement
    const pushX = (flake.x - mousePosition.x) * mouseEffect * 1.5 + windEffect + Math.sin(flake.id * 0.1) * turbulenceEffect;
    const pushY = (flake.y - mousePosition.y) * mouseEffect * 0.5 + Math.cos(flake.id * 0.1) * turbulenceEffect * 0.3;

    // Rotation based on movement and mass
    const rotation = (windEffect + turbulenceEffect + mouseEffect * 20) * (1 / flake.mass);

    return { pushX, pushY, rotation, totalInfluence: mouseEffect + Math.abs(windEffect) * 0.3 };
  };

  // Memoize snowflake rendering for performance
  const renderedSnowflakes = useMemo(() => {
    if (!enabled || isReducedMotion || snowflakes.length === 0) {
      return null;
    }

    return (
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" style={{ height: '100vh', width: '100vw' }}>
        {snowflakes.map((flake) => {
          const { pushX, pushY, rotation, totalInfluence } = calculateRealisticEffects(flake);
          return (
            <div
              key={flake.id}
              className="absolute"
              style={{
                left: `${Math.max(0, Math.min(100, flake.x + pushX))}%`,
                top: `${flake.y}%`,
                animation: `snowfall-${flake.id} ${flake.speed + 6}s ease-in-out infinite`,
                animationDelay: `${flake.delay}s`,
                transform: `translateY(${pushY * 8}px) rotate(${rotation}deg) scale(${1 + totalInfluence * 0.2})`,
                transition: 'transform 0.2s ease-out, left 0.3s ease-out',
                filter: `blur(${0.1 + totalInfluence * 0.3}px)`,
              }}
            >
              {renderSnowflake(flake)}
            </div>
          );
        })}

        {/* Dynamic CSS animations for each snowflake */}
        <style dangerouslySetInnerHTML={{
          __html: `
            ${snowflakes.map((flake) => `
              @keyframes snowfall-${flake.id} {
                0% {
                  transform: translateY(-20vh) translateX(${flake.sway * -10}px) rotate(0deg) scale(${0.8 + flake.mass * 0.3});
                  opacity: 0;
                }
                5% {
                  opacity: ${flake.opacity};
                }
                25% {
                  transform: translateY(25vh) translateX(${flake.sway * 25}px) rotate(${90 * flake.swaySpeed}deg) scale(${1 + flake.mass * 0.2});
                  opacity: ${flake.opacity};
                }
                50% {
                  transform: translateY(50vh) translateX(${flake.sway * 50}px) rotate(${180 * flake.swaySpeed}deg) scale(${0.9 + flake.mass * 0.3});
                  opacity: ${flake.opacity * 0.9};
                }
                75% {
                  transform: translateY(75vh) translateX(${flake.sway * 75}px) rotate(${270 * flake.swaySpeed}deg) scale(${1.1 + flake.mass * 0.1});
                  opacity: ${flake.opacity * 0.7};
                }
                95% {
                  opacity: ${flake.opacity * 0.3};
                }
                100% {
                  transform: translateY(120vh) translateX(${flake.sway * 100}px) rotate(${360 * flake.swaySpeed}deg) scale(${0.6 + flake.mass * 0.2});
                  opacity: 0;
                }
              }
            `).join('')}
            
            @media (prefers-reduced-motion: reduce) {
              .snowfall-* {
                animation: none !important;
              }
            }
          `
        }} />
      </div>
    );
  }, [enabled, isVisible, isReducedMotion, snowflakes]);

  // Don't render anything if disabled or reduced motion
  if (!enabled || isReducedMotion) {
    return <>{children}</>;
  }

  return (
    <>
      {renderedSnowflakes}
      <div className={className}>
        {children}
      </div>
    </>
  );
};

export default SnowfallWrapper;
