import { useEffect, useRef, useState } from 'react';

/**
 * Animated counter hook that counts up from 0 to a target value
 * when triggered (typically by scroll visibility).
 */
export function useAnimatedCounter(
  endValue: number,
  isVisible: boolean,
  duration: number = 2000,
  suffix: string = ''
): string {
  const [displayValue, setDisplayValue] = useState(`0${suffix}`);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(`${endValue}${suffix}`);
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * endValue);

      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, endValue, duration, suffix]);

  return displayValue;
}
