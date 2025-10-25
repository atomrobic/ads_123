import React, { useState, useEffect, useRef } from 'react';

// Enhanced FadeInWhenVisible with more options
export const FadeInWhenVisible = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  direction = 'up',
  threshold = 0.1,
  once = true,
  className = '',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const directions = {
    up: 'translateY(50px)',
    down: 'translateY(-50px)',
    left: 'translateX(50px)',
    right: 'translateX(-50px)',
    none: 'none'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { 
        threshold,
        rootMargin: '50px' // Trigger slightly before element enters viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : directions[direction],
        transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
        willChange: 'transform, opacity',
        ...style
      }}
    >
      {children}
    </div>
  );
};

// Enhanced FloatingElement with more control
export const FloatingElement = ({ 
  children, 
  duration = 3,
  intensity = 1,
  delay = 0,
  className = '',
  style = {}
}) => {
  return (
    <div
      className={className}
      style={{
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
        transform: `translateY(0px)`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

// New StaggeredContainer for staggering child animations
export const StaggeredContainer = ({ 
  children, 
  staggerDelay = 0.1,
  animationProps = {},
  className = '',
  style = {}
}) => {
  return (
    <div className={className} style={style}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              delay: (index * staggerDelay),
              ...animationProps
            })
          : child
      )}
    </div>
  );
};

// New ScaleOnHover component
export const ScaleOnHover = ({ 
  children, 
  scale = 1.05,
  duration = 0.3,
  className = '',
  style = {}
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      style={{
        transform: isHovered ? `scale(${scale})` : 'scale(1)',
        transition: `transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

// New Typewriter effect
export const Typewriter = ({ 
  text, 
  speed = 50,
  delay = 0,
  className = '',
  style = {}
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayText('');
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return (
    <span className={className} style={style}>
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

// New ParallaxScroll component
export const ParallaxScroll = ({ 
  children, 
  speed = 0.5,
  className = '',
  style = {}
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current;
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight && elementTop > -element.offsetHeight) {
          setOffset(elementTop * speed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
        willChange: 'transform',
        ...style
      }}
    >
      {children}
    </div>
  );
};

// New PulseAnimation component
export const PulseAnimation = ({ 
  children, 
  duration = 2,
  scale = 1.1,
  className = '',
  style = {}
}) => {
  return (
    <div
      className={className}
      style={{
        animation: `pulse ${duration}s ease-in-out infinite`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

// New SlideInFromSides component
export const SlideInFromSides = ({ 
  children, 
  delay = 0,
  duration = 0.8,
  from = 'left',
  className = '',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const transforms = {
    left: 'translateX(-100px)',
    right: 'translateX(100px)',
    top: 'translateY(-100px)',
    bottom: 'translateY(100px)'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : transforms[from],
        transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

// CSS keyframes for animations (add this to your global CSS)
const globalStyles = `
@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(1deg); 
  }
}

@keyframes pulse {
  0%, 100% { 
    transform: scale(1); 
    opacity: 1;
  }
  50% { 
    transform: scale(${1.05}); 
    opacity: 0.8;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.typewriter .cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Performance optimizations */
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}

.backface-hidden {
  backface-visibility: hidden;
}

.transform-3d {
  transform-style: preserve-3d;
}
`;

// Component to inject global styles
export const AnimationStyles = () => (
  <style>{globalStyles}</style>
);

// Hook for custom scroll animations
export const useScrollAnimation = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isInView];
};

// Hook for hover animations
export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return [isHovered, hoverProps];
};

// Export all animations
export default {
  FadeInWhenVisible,
  FloatingElement,
  StaggeredContainer,
  ScaleOnHover,
  Typewriter,
  ParallaxScroll,
  PulseAnimation,
  SlideInFromSides,
  AnimationStyles,
  useScrollAnimation,
  useHoverAnimation
};