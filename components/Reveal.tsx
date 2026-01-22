import React, { useEffect } from 'react';

const Reveal: React.FC<{ children: React.ReactNode | ((isRevealed: boolean) => React.ReactNode); className?: string; delay?: number; color?: string }> = ({ children, className = "", delay = 0, color = "blue" }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -25% 0px' // Wait until element is near middle of screen
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  // If a custom className is provided (like slide-grow-right or reveal-glitch), use it exclusively
  const hasCustomAnimation = className.includes('scan-reveal') || className.includes('reveal-glitch');

  useEffect(() => {
    if (isVisible) {
      let duration = 1200; // default buffer
      if (className.includes('reveal-glitch')) duration = 1000;
      if (className.includes('scan-reveal')) duration = 1200;
      if (className.includes('scan-reveal-right')) duration = 1500;

      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasCustomAnimation, className]);

  return (
    <div
      ref={ref}
      className={hasCustomAnimation
        ? (isVisible
          ? (animationComplete ? className.replace('reveal-glitch', '').trim() : className)
          : 'opacity-0')
        : `transition-all duration-1000 ${className} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {hasCustomAnimation ? (
        typeof children === 'function' ? children(animationComplete) : children
      ) : (
        <div className={(isVisible && !animationComplete ? "reveal-flicker reveal-scan" : "relative") + " h-full"}>
          {typeof children === 'function' ? children(animationComplete) : children}
        </div>
      )}
    </div>
  );
};

export default Reveal;
