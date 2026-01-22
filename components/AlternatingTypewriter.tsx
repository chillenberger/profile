import React, { useState, useEffect, useRef } from 'react';

interface AlternatingTypewriterProps {
  text: string;
  className?: string;
  speed?: number; // ms per character
  lineDelay?: number; // delay between line pairs
}

interface Line {
  text: string;
  rightPadding: number;
}

export const AlternatingTypewriter: React.FC<AlternatingTypewriterProps> = ({
  text,
  className = "",
  speed = 30,
  lineDelay = 500
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isCalculated, setIsCalculated] = useState(false);

  // Dynamic line calculation
  useEffect(() => {
    if (!containerRef.current) return;

    const calculateLines = () => {
      const container = containerRef.current;
      if (!container) return;

      const words = text.split(' ');
      const newLines: Line[] = [];
      let currentLine = words[0];

      // Measure a single character width since we are using monospace
      const measureEl = document.createElement('span');
      measureEl.style.visibility = 'hidden';
      measureEl.style.position = 'absolute';
      measureEl.style.whiteSpace = 'pre';

      const computedStyle = getComputedStyle(container);
      measureEl.style.font = computedStyle.font;
      measureEl.style.fontFamily = computedStyle.fontFamily;
      measureEl.style.fontSize = computedStyle.fontSize;
      measureEl.style.fontWeight = computedStyle.fontWeight;
      measureEl.style.letterSpacing = computedStyle.letterSpacing;

      measureEl.textContent = 'W';
      container.appendChild(measureEl);

      const charWidth = measureEl.getBoundingClientRect().width;
      container.removeChild(measureEl);

      let containerWidth = container.clientWidth;
      if (containerWidth === 0 && container.parentElement) {
        containerWidth = container.parentElement.clientWidth;
      }

      const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
      const contentWidth = containerWidth - paddingLeft - paddingRight;

      if (charWidth === 0) {
        setLines([text]);
        setIsCalculated(true);
        return;
      }

      const maxCharsPerLine = Math.floor(contentWidth / charWidth);

      for (let i = 1; i < words.length; i++) {
        const word = words[i];
        if (currentLine.length + 1 + word.length > maxCharsPerLine) {
          newLines.push({ text: currentLine, rightPadding: maxCharsPerLine - currentLine.length });
          currentLine = word;
        } else {
          currentLine += ' ' + word;
        }
      }
      newLines.push({ text: currentLine, rightPadding: 0 });
      setLines(newLines);
      setIsCalculated(true);
    };

    calculateLines();

    // Recalculate on resize
    window.addEventListener('resize', calculateLines);
    return () => window.removeEventListener('resize', calculateLines);
  }, [text]);

  // Animation sequencer
  useEffect(() => {
    if (!isCalculated || lines.length === 0) return;

    // We animate in pairs (0,1), (2,3), etc.
    let currentPairIndex = 0;

    const animateNextPair = () => {
      if (currentPairIndex * 2 >= lines.length) return;

      // Show the next pair
      setVisibleLines((prev) => Math.min(prev + 2, lines.length));

      // Calculate duration for this pair max length to wait
      // Or just wait fixed delay? "types two lines at a time... repeats".
      // Let's assume we wait for the longest line of the pair to finish + delay
      const line1 = lines[currentPairIndex * 2] || "";
      const line2 = lines[currentPairIndex * 2 + 1] || "";
      const maxChars = Math.max(line1.text?.length || 0, line2.text?.length || 0);
      const pairDuration = maxChars * speed;

      currentPairIndex++;
      setTimeout(animateNextPair, pairDuration + lineDelay);
    };

    // Start slightly after calculation
    const startTimer = setTimeout(animateNextPair, 100);
    return () => clearTimeout(startTimer);
  }, [isCalculated, lines, speed, lineDelay]);


  return (
    <div ref={containerRef} className={`relative text-left ${className} ${!isCalculated ? 'opacity-0' : 'opacity-100'}`}>
      {lines.map((line: Line, index) => {
        const isVisible = index < visibleLines;
        // Even lines (0, 2...) -> Left to Right
        // Odd lines (1, 3...) -> Right to Left
        const isEven = index % 2 === 0;
        const animationClass = isEven ? 'animate-type-lr' : 'animate-type-rl';

        // We only want the animation to run when it becomes visible.
        // We can control this by only rendering the line content wrapper when visible

        return (
          <div key={index} className="relative overflow-hidden whitespace-nowrap" style={{ minHeight: '1.5em' }}>
            {isVisible && (
              <div
                className={`inline-block whitespace-nowrap overflow-hidden ${animationClass}`}
                style={{
                  animationDuration: `${line.text.length * speed}ms`,
                  animationTimingFunction: `steps(${line.text.length}, end)`, // Match steps to char count
                  animationFillMode: 'forwards',
                  width: '0%', // Start at 0
                  paddingRight: `${line.rightPadding}ch`, // Use ch units for monospaced padding
                  float: isEven ? 'left' : 'right', // Visual alignment
                  boxSizing: 'border-box' // Ensure width=0 hides padding
                }}
              >
                {line.text}
              </div>
            )}
            {/* Invisible placeholder to hold height if needed, though minHeight handles it mostly. 
                  Actually, for the layout to be stable, we might want the text to be there but hidden? 
                  But we are calculating based on container width, so standard block stacking is fine. 
               */}
          </div>
        );
      })}
      <style>{`
        @keyframes type-lr {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes type-rl {
          from { width: 0; }
          to { width: 100%; }
        }
        /* 
           For R->L typing effect (revealing from right), we usually need the container to be right aligned 
           and the width growing reveals it. 
           If we float right, and expand width, it reveals from right to left? 
           Test: 
           [      TEXT] (width 0) -> [     TEXT] (width small) -> [TEXT] (width full)
           Yes, standard overflow hidden + right alignment works for R->L reveal.
        */
        .animate-type-lr {
          animation-name: type-lr;
        }
        .animate-type-rl {
          animation-name: type-rl;
          direction: rtl; /* Ensures text aligns right */
        }
      `}</style>
    </div>
  );
};
