import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  value: string;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({ value, className = '' }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Check if value is numeric or has suffixes like '40+', '250+', '99.9%', '06'
    const match = value.match(/([0-9.]+)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const suffix = value.replace(match[1], '');
    const isDecimal = match[1].includes('.');
    const duration = 1400; // ms
    const steps = 35;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * eased;

      if (currentStep >= steps) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        const formatted = isDecimal
          ? currentNum.toFixed(1)
          : Math.floor(currentNum).toString().padStart(value.startsWith('0') ? 2 : 1, '0');
        setDisplayValue(`${formatted}${suffix}`);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
