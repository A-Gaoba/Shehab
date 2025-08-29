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
  // Mouse interaction variables removed - not needed for straight falling snow
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [mouseInfluence, setMouseInfluence] = useState(0);
  // Wind and turbulence disabled - snowflakes fall straight down
  // const [windStrength, setWindStrength] = useState(0);
  // const [turbulence, setTurbulence] = useState(0);
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
      light: { count: performanceMode ? 30 : 50, maxSize: 4, maxSpeed: 3 },
      medium: { count: performanceMode ? 50 : 80, maxSize: 6, maxSpeed: 4 },
      heavy: { count: performanceMode ? 80 : 120, maxSize: 8, maxSpeed: 5 },
    };

    const config = intensityMap[intensity];
    const isMobile = window.innerWidth < 768;
    const adjustedCount = isMobile ? Math.floor(config.count * 0.75) : config.count;

    const flakes: Snowflake[] = [];

    for (let i = 0; i < adjustedCount; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * config.maxSize + 1,
        speed: Math.random() * config.maxSpeed + 0.5,
        opacity: Math.random() * 0.9 + 0.4,
        delay: Math.random() * 15,
        sway: 0, // No horizontal sway - fall straight down
        swaySpeed: 0, // No sway speed needed
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

    // Mouse event handler removed - no mouse interaction needed
    // const handleMouseMove = (e: MouseEvent) => {
    //   const x = (e.clientX / window.innerWidth) * 100;
    //   const y = ((e.clientY + window.scrollY) / (document.documentElement.scrollHeight || window.innerHeight)) * 100;
    //   setMousePosition({ x, y });
    //   setMouseInfluence(1);
    //   setTimeout(() => setMouseInfluence(0), 2000);
    // };

    // Wind and turbulence effects disabled - snowflakes fall straight down
    // const windInterval = setInterval(() => {
    //   if (!performanceMode) {
    //     setWindStrength(Math.sin(Date.now() * 0.001) * 3 + Math.random() * 2 - 1);
    //     setTurbulence(Math.cos(Date.now() * 0.0015) * 2 + Math.random() * 1.5 - 0.75);
    //   } else {
    //     setWindStrength(Math.sin(Date.now() * 0.002) * 1.5);
    //     setTurbulence(Math.cos(Date.now() * 0.003) * 0.5);
    //   }
    // }, performanceMode ? 400 : 200);

    document.addEventListener('visibilitychange', handleVisibilityChange);
    // Mouse event listener removed - no mouse interaction needed

    return () => {
      // clearInterval(windInterval); // No wind interval to clear
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      // Mouse event listener cleanup removed
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

  // Simplified physics - snowflakes fall straight down only
  const calculateRealisticEffects = () => {
    // No horizontal movement - snowflakes fall straight down
    const pushX = 0; // No horizontal push
    const pushY = 0; // No vertical push
    const rotation = 0; // No rotation
    const totalInfluence = 0; // No effects

    return { pushX, pushY, rotation, totalInfluence };
  };

  // Memoize snowflake rendering for performance
  const renderedSnowflakes = useMemo(() => {
    if (!enabled || isReducedMotion || snowflakes.length === 0) {
      return null;
    }

    return (
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" style={{ height: '100vh', width: '100vw' }}>
        {snowflakes.map((flake) => {
          const { pushX, pushY, rotation, totalInfluence } = calculateRealisticEffects();
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
        {snowflakes.length > 0 && (
          <style dangerouslySetInnerHTML={{
            __html: `
              ${snowflakes.map((flake) => `
                @keyframes snowfall-${flake.id} {
                0% {
                  transform: translateY(-10vh) translateX(0px) rotate(0deg);
                  opacity: 0;
                }
                10% {
                  opacity: ${flake.opacity};
                }
                90% {
                  opacity: ${flake.opacity * 0.5};
                }
                100% {
                  transform: translateY(110vh) translateX(0px) rotate(0deg);
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
        )}
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
