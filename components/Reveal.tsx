import React, { useEffect } from 'react';

const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number; color?: string }> = ({ children, className = "", delay = 0, color = "blue" }) => {
  const [isVisible, setIsVisible] = React.useState(false);
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

  // If a custom className is provided (like slide-grow-right), use it exclusively
  const hasCustomAnimation = className.includes('scan-reveal');

  return (
    <div
      ref={ref}
      className={hasCustomAnimation
        ? (isVisible ? className : 'opacity-0')
        : `transition-all duration-1000 ${className} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {hasCustomAnimation ? (
        children
      ) : (
        <div className={isVisible ? "reveal-flicker reveal-scan" : ""}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Reveal;
