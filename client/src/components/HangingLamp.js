import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import './HangingLamp.css';

const HangingLamp = () => {
  const { isDarkMode } = useDarkMode();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Two lamps positioned at top right, left of the nav actions (desktop)
  // Nav actions are approximately 200px wide, so position lamps further left
  const [lamp1Position, setLamp1Position] = useState({ x: window.innerWidth - 280, y: 200 });
  const [lamp2Position, setLamp2Position] = useState({ x: window.innerWidth - 400, y: 250 });
  
  const [dragging, setDragging] = useState(null); // 'lamp1' or 'lamp2' or null
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Update lamp positions based on screen size
      if (window.innerWidth <= 768) {
        // Mobile: position lamp left of nav actions
        setLamp1Position({ x: window.innerWidth - 120, y: 120 });
      } else {
        // Desktop: position lamps left of nav actions (nav actions ~200px wide)
        setLamp1Position({ x: window.innerWidth - 280, y: 200 });
        setLamp2Position({ x: window.innerWidth - 400, y: 250 });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial position

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Handle dragging
      if (dragging === 'lamp1') {
        setLamp1Position({ 
          x: e.clientX - dragOffset.x, 
          y: e.clientY - dragOffset.y 
        });
      } else if (dragging === 'lamp2') {
        setLamp2Position({ 
          x: e.clientX - dragOffset.x, 
          y: e.clientY - dragOffset.y 
        });
      }
    };

    const handleMouseUp = () => {
      setDragging(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, dragOffset]);

  const handleLampMouseDown = (lamp, e) => {
    e.preventDefault();
    setDragging(lamp);
    const lampPos = lamp === 'lamp1' ? lamp1Position : lamp2Position;
    setDragOffset({
      x: e.clientX - lampPos.x,
      y: e.clientY - lampPos.y
    });
  };

  return (
    <div className="hanging-lamp-container">
      <svg className="lamp-thread-svg" width="100%" height="100%">
        {/* Thread for Lamp 1 */}
        <line
          x1={lamp1Position.x}
          y1={0}
          x2={lamp1Position.x}
          y2={lamp1Position.y - 10}
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Thread for Lamp 2 - Only on desktop */}
        {!isMobile && (
          <line
            x1={lamp2Position.x}
            y1={0}
            x2={lamp2Position.x}
            y2={lamp2Position.y - 10}
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}
      </svg>

      {/* Lamp 1 */}
      <div 
        className="lamp"
        style={{
          left: `${lamp1Position.x}px`,
          top: `${lamp1Position.y}px`,
          transform: 'translateX(-50%)',
          cursor: dragging === 'lamp1' ? 'grabbing' : 'grab'
        }}
        onMouseDown={(e) => handleLampMouseDown('lamp1', e)}
      >
        <img 
          src="/images/hanging_lamp.png" 
          alt="Pendant Lamp 1"
          className={`lamp-image ${isMobile ? 'mobile-lamp' : ''}`}
        />
        {isDarkMode && (
          <>
            <div className="golden-glow"></div>
            <div className="golden-glow-outer"></div>
            <div className="light-cone"></div>
          </>
        )}
      </div>

      {/* Lamp 2 - Only on desktop */}
      {!isMobile && (
        <div 
          className="lamp"
          style={{
            left: `${lamp2Position.x}px`,
            top: `${lamp2Position.y}px`,
            transform: 'translateX(-50%)',
            cursor: dragging === 'lamp2' ? 'grabbing' : 'grab'
          }}
          onMouseDown={(e) => handleLampMouseDown('lamp2', e)}
        >
          <img 
            src="/images/hanging_lamp.png" 
            alt="Pendant Lamp 2"
            className="lamp-image"
          />
          {isDarkMode && (
            <>
              <div className="golden-glow"></div>
              <div className="golden-glow-outer"></div>
              <div className="light-cone"></div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HangingLamp;
