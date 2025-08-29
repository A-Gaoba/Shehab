import React from 'react';

interface SnowflakePatternProps {
  size: number;
  opacity: number;
  type: 'simple' | 'detailed' | 'crystal' | 'stellar' | 'dendrite';
  className?: string;
}

const SnowflakePatterns: React.FC<SnowflakePatternProps> = ({
  size,
  opacity,
  type,
  className = '',
}) => {
  const baseStyle = {
    opacity,
    filter: `blur(${0.1 + (size * 0.02)}px) drop-shadow(0 0 ${size * 0.5}px rgba(255,255,255,0.8))`,
    transform: `scale(${0.8 + (size * 0.1)})`,
  };

  switch (type) {
    case 'stellar':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`snowflake-stellar ${className}`}
          style={baseStyle}
        >
          {/* Main star arms */}
          <path
            d="M12 2L13.5 8L20 9L13.5 10L12 16L10.5 10L4 9L10.5 8L12 2Z"
            fill="white"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.4"
          />
          {/* Secondary star arms */}
          <path
            d="M12 22L10.5 16L4 15L10.5 14L12 8L13.5 14L20 15L13.5 16L12 22Z"
            fill="white"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.4"
          />
          {/* Side star arms */}
          <path
            d="M2 12L8 13.5L9 20L10 13.5L16 12L10 10.5L9 4L8 10.5L2 12Z"
            fill="white"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.4"
          />
          <path
            d="M22 12L16 10.5L15 4L14 10.5L8 12L14 13.5L15 20L16 13.5L22 12Z"
            fill="white"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.4"
          />
          {/* Center detail */}
          <circle cx="12" cy="12" r="1.2" fill="rgba(255,255,255,0.9)" />
          <circle cx="12" cy="12" r="0.6" fill="rgba(255,255,255,0.7)" />
        </svg>
      );

    case 'dendrite':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`snowflake-dendrite ${className}`}
          style={baseStyle}
        >
          {/* Main dendritic structure */}
          <path
            d="M12 2L13.5 6L16 7L13.5 8L12 12L10.5 8L8 7L10.5 6L12 2Z"
            fill="white"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="0.3"
          />
          <path
            d="M12 22L10.5 18L8 17L10.5 16L12 12L13.5 16L16 17L13.5 18L12 22Z"
            fill="white"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="0.3"
          />
          <path
            d="M2 12L6 13.5L7 16L8 13.5L12 12L8 10.5L7 8L6 10.5L2 12Z"
            fill="white"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="0.3"
          />
          <path
            d="M22 12L18 10.5L17 8L16 10.5L12 12L16 13.5L17 16L18 13.5L22 12Z"
            fill="white"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="0.3"
          />
          {/* Branch details */}
          <path
            d="M12 6L13 8L14 9L13 10L12 12L11 10L10 9L11 8L12 6Z"
            fill="rgba(255,255,255,0.8)"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.2"
          />
          <path
            d="M12 18L13 16L14 15L13 14L12 12L11 14L10 15L11 16L12 18Z"
            fill="rgba(255,255,255,0.8)"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.2"
          />
          <path
            d="M6 12L8 13L9 14L8 15L6 12L4 15L3 14L4 13L6 12Z"
            fill="rgba(255,255,255,0.8)"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.2"
          />
          <path
            d="M18 12L16 13L15 14L16 15L18 12L20 15L21 14L20 13L18 12Z"
            fill="rgba(255,255,255,0.8)"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.2"
          />
          {/* Center detail */}
          <circle cx="12" cy="12" r="1.5" fill="rgba(255,255,255,0.9)" />
          <circle cx="12" cy="12" r="0.8" fill="rgba(255,255,255,0.7)" />
        </svg>
      );

    case 'detailed':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`snowflake-detailed ${className}`}
          style={baseStyle}
        >
          {/* Main star pattern */}
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
            fill="white"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.5"
          />
          {/* Bottom star pattern */}
          <path
            d="M12 22L10.91 15.74L4 15L10.91 14.26L12 8L13.09 14.26L20 15L13.09 15.74L12 22Z"
            fill="white"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.5"
          />
          {/* Left star pattern */}
          <path
            d="M2 12L8.26 13.09L9 20L9.74 13.09L16 12L9.74 10.91L9 4L8.26 10.91L2 12Z"
            fill="white"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.5"
          />
          {/* Right star pattern */}
          <path
            d="M22 12L15.74 10.91L15 4L14.26 10.91L8 12L14.26 13.09L15 20L15.74 13.09L22 12Z"
            fill="white"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.5"
          />
          {/* Center detail */}
          <circle cx="12" cy="12" r="1" fill="rgba(255,255,255,0.9)" />
        </svg>
      );

    case 'crystal':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`snowflake-crystal ${className}`}
          style={baseStyle}
        >
          {/* Diamond pattern */}
          <path
            d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
            fill="white"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="0.3"
          />
          <path
            d="M12 22L10 16L4 14L10 12L12 6L14 12L20 14L14 16L12 22Z"
            fill="white"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="0.3"
          />
          {/* Center cross */}
          <path
            d="M12 8L12 16M8 12L16 12"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
        </svg>
      );

    default: // simple
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`snowflake-simple ${className}`}
          style={baseStyle}
        >
          {/* Simple star pattern */}
          <path
            d="M12 2L13.5 8L20 9L13.5 10L12 16L10.5 10L4 9L10.5 8L12 2Z"
            fill="white"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.4"
          />
          {/* Center dot */}
          <circle cx="12" cy="12" r="0.8" fill="rgba(255,255,255,0.8)" />
        </svg>
      );
  }
};

export default SnowflakePatterns;
