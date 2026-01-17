import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay = 0,
  speed = 40,
  className = "",
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [displayedText, started, text, speed, onComplete]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Invisible base text to reserve space */}
      <span className="invisible select-none pointer-events-none" aria-hidden="true">
        {text}
      </span>

      {/* Absolute overlay for the typing animation */}
      <span className="absolute top-0 left-0">
        {displayedText}
        {started && displayedText.length < text.length && (
          <span className="inline-block w-[2px] h-[1em] bg-neon-blue animate-pulse ml-0.5 align-middle" />
        )}
      </span>
    </span>
  );
};
