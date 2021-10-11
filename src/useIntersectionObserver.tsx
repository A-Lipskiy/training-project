import { RefObject, useEffect } from 'react';

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  onIntersection: () => unknown,
  threshold = 0
): void {
  useEffect(() => {
    const node = elementRef?.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && onIntersection(),
      {
        threshold,
      }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, onIntersection]);
}
