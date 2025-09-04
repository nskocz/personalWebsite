import { useEffect, useRef } from 'react';

export const useLetterDrop = (text: string, interval: number = 3000) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const letters = text.split('');
    
    const createLetterDrops = () => {
      container.innerHTML = '';
      
      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.className = `letterDrop ld${Math.floor(Math.random() * 9) + 1}`;
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        container.appendChild(span);
      });
    };
    
    // Initial animation
    createLetterDrops();
    
    // Repeat animation at intervals
    const intervalId = setInterval(createLetterDrops, interval);
    
    return () => clearInterval(intervalId);
  }, [text, interval]);
  
  return containerRef;
};