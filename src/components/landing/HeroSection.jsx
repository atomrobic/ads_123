import React, { useState, useEffect } from 'react';
import Button from '../commonui/ui/Button';
import { FloatingElement, FadeInWhenVisible } from '../../utils/animation';
import {  carouselSlides } from '../../hooks/landingApi';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Carousel auto-slide
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Fullscreen Background Images with Smooth Fade */}
      {carouselSlides.map((slide, index) => (
        <div
          key={slide.id}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: index === currentSlide ? 1 : 0,
            zIndex: 0
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gray-800/50 z-10" />

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <div 
          className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          style={{ left: `${mousePosition.x / 20}px`, top: `${mousePosition.y / 20}px`, transition: 'all 0.3s ease' }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          style={{ right: `${mousePosition.x / 30}px`, bottom: `${mousePosition.y / 30}px`, transition: 'all 0.3s ease' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 text-center">
        <FadeInWhenVisible>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 leading-tight">
            {carouselSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            {carouselSlides[currentSlide].description}
          </p>
        </FadeInWhenVisible>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button variant="glass" size="lg">Get Started Free →</Button>
          <Button variant="outline" size="lg">Watch Demo 🎥</Button>
        </div>

      
      </div>

      {/* Floating elements */}
      <FloatingElement duration={4}>
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl opacity-20 blur-sm" />
      </FloatingElement>
      <FloatingElement duration={5}>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-sm" />
      </FloatingElement>
    </section>
  );
};


export default HeroSection;
