'use client';

import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [circleRadius, setCircleRadius] = useState(120);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Calculate responsive circle radius based on viewport width
  useEffect(() => {
    const calculateRadius = () => {
      if (typeof window === 'undefined') return;
      const viewportWidth = window.innerWidth;
      // 10% of viewport width, clamped between 120px and 260px
      const radius = Math.min(Math.max(viewportWidth * 0.1, 100), 150);
      setCircleRadius(radius);
    };

    // Calculate on mount
    calculateRadius();

    // Update on resize
    window.addEventListener('resize', calculateRadius);
    return () => window.removeEventListener('resize', calculateRadius);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setCursorPos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Layer - Full Viewport Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 50%, #000000 100%)',
        }}
      >
        {/* Vignette Effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.9) 100%)',
          }}
        />
      </div>

      {/* Image Container - Viewport-Based Sizing, Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10" style={{ paddingTop: '10vh' }}>
        <div 
          ref={imageContainerRef}
          className="relative overflow-hidden"
          style={{
            height: '100vh',
            width: 'auto',
            maxWidth: '100%',
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Vecna Image - Behind, Only Visible in Circle */}
          <img
            src="/vecna-image.png"
            alt="Vecna"
            className="absolute inset-0 h-full w-auto object-cover pointer-events-none"
            style={{
              objectPosition: 'center top',
              clipPath: isHovering
                ? `circle(${circleRadius}px at ${cursorPos.x}% ${cursorPos.y}%)`
                : 'circle(0px at 50% 50%)',
              WebkitClipPath: isHovering
                ? `circle(${circleRadius}px at ${cursorPos.x}% ${cursorPos.y}%)`
                : 'circle(0px at 50% 50%)',
              transition: 'clip-path 0.1s ease-out, -webkit-clip-path 0.1s ease-out',
            }}
          />

          {/* Hero Image - Visible Everywhere EXCEPT Circle (Inverse Mask) */}
          <img
            src="/hero-image.png"
            alt="Pratham Dubey"
            className="h-full w-auto object-cover relative pointer-events-none"
            style={{
              objectPosition: 'center top',
              maskImage: isHovering
                ? `radial-gradient(circle ${circleRadius}px at ${cursorPos.x}% ${cursorPos.y}%, transparent 0%, transparent ${circleRadius}px, black calc(${circleRadius}px + 1px))`
                : 'radial-gradient(circle, black 0%, black 100%)',
              WebkitMaskImage: isHovering
                ? `radial-gradient(circle ${circleRadius}px at ${cursorPos.x}% ${cursorPos.y}%, transparent 0%, transparent ${circleRadius}px, black calc(${circleRadius}px + 1px))`
                : 'radial-gradient(circle, black 0%, black 100%)',
              transition: 'mask-image 0.1s ease-out, -webkit-mask-image 0.1s ease-out',
            }}
          />
        </div>
      </div>

      {/* Content Layer - Text starts after ~50% viewport height */}
      <div 
        className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none"
        style={{
          paddingTop: '50vh',
          paddingBottom: '4rem',
        }}
      >
        {/* Text Block - Overlaid on Image */}
        <div className="text-center space-y-2 md:space-y-3 mb-6 md:mb-8">
          {/* Name - Red with glow */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight"
            style={{
              color: '#ff2a2a',
              textShadow: '0 0 20px rgba(255, 42, 42, 0.8), 0 0 40px rgba(255, 42, 42, 0.4)',
            }}
          >
            PRATHAM DUBEY
          </h1>
          
          {/* Role */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 uppercase tracking-wide">
            FULL STACK DEVELOPER
          </p>
          
          {/* Tagline */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 uppercase tracking-widest">
            BUILDING SYSTEMS THAT SURVIVE CHAOS
          </p>
        </div>

        {/* CTA Buttons - Overlaid on Image */}
        <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
          {/* Button 1: Enter the Upside Down */}
          <button 
            className="px-6 py-3 border-2 border-red-500 bg-transparent text-white uppercase tracking-wide font-medium rounded"
          >
            ENTER THE UPSIDE DOWN
          </button>
          
          {/* Button 2: View the File */}
          <button 
            className="px-6 py-3 border-2 border-red-500 bg-transparent text-white uppercase tracking-wide font-medium rounded"
          >
            VIEW THE FILE
          </button>
        </div>
      </div>
    </section>
  );
}
