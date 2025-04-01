import React, { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

const FireworksComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const fireworks = new Fireworks(container, {
      /* options */
      opacity: 0.5,
      acceleration: 1.02,
      friction: 0.97,  
      gravity: 1.5,
      particles: 200,
      trace: 3,
      traceSpeed: 10,
      explosionNumber: 5,
      explosionPower: 4,
      background: 'transparent',
    });

    fireworks.start();

    return () => {
      fireworks.stop();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%', 
        height: '400px',
      }}
    />
  );
};

export default FireworksComponent;