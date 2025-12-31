import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import './Logo.css';

const Logo = ({ variant = 'default', size = 'medium' }) => {
  const { isDarkMode } = useDarkMode();
  // variant: 'default', 'light', 'dark'
  // size: 'small', 'medium', 'large'
  
  const sizeMap = {
    small: { width: 140, height: 50, fontSize: 24 },
    medium: { width: 180, height: 60, fontSize: 28 },
    large: { width: 220, height: 70, fontSize: 32 }
  };

  const colorMap = {
    default: { primary: isDarkMode ? '#ffffff' : '#1a1a1a', accent: isDarkMode ? '#f4d03f' : '#d4af37' },
    light: { primary: '#ffffff', accent: '#d4af37' },
    dark: { primary: '#1a1a1a', accent: '#d4af37' }
  };

  const { width, height, fontSize } = sizeMap[size];
  const { primary, accent } = colorMap[variant];

  return (
    <div className={`logo-container logo-${size}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 180 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient for wood effect */}
        <defs>
          <linearGradient id="woodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#A0522D', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#654321', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="laminateShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: accent, stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: accent, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: accent, stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>

        {/* Laminate layers stack icon - vertical */}
        <g>
          {/* Right layer - darkest */}
          <rect
            x="28"
            y="15"
            width="4"
            height="32"
            rx="1"
            fill={accent}
            opacity="0.4"
          />
          {/* Middle layer */}
          <rect
            x="23"
            y="15"
            width="4"
            height="32"
            rx="1"
            fill={accent}
            opacity="0.6"
          />
          {/* Front layer - with wood grain effect */}
          <rect
            x="18"
            y="15"
            width="4"
            height="32"
            rx="1"
            fill="url(#woodGradient)"
          />
          
          {/* Wood grain lines - vertical */}
          <path
            d="M19.5 17 Q19.8 21 19.5 25 Q19.2 29 19.5 33 Q19.8 37 19.5 41 Q19.2 45 19.5 47"
            stroke={accent}
            strokeWidth="0.3"
            opacity="0.5"
            fill="none"
          />
          <path
            d="M20.5 17 Q20.2 22 20.5 27 Q20.8 32 20.5 37 Q20.2 42 20.5 47"
            stroke={accent}
            strokeWidth="0.3"
            opacity="0.4"
            fill="none"
          />
          
          {/* Shine/gloss effect on front layer */}
          <rect
            x="18.5"
            y="19"
            width="1.5"
            height="24"
            rx="0.5"
            fill="url(#laminateShine)"
            opacity="0.3"
          />
        </g>

        {/* Company Name - Vaishali */}
        <text
          x="42"
          y="30"
          fontFamily="'Montserrat', 'Poppins', sans-serif"
          fontSize={fontSize}
          fontWeight="800"
          fill={primary}
          letterSpacing="1.5"
        >
          Vaishali
        </text>

        {/* Company Type - Enterprise */}
        <text
          x="45"
          y="48"
          fontFamily="Poppins, sans-serif"
          fontSize="11"
          fontWeight="500"
          fill={accent}
          letterSpacing="2"
        >
          ENTERPRISE
        </text>
      </svg>
    </div>
  );
};

export default Logo;
