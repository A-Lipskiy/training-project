import { RefObject, useEffect, useState } from 'react';

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  listLength: number,
  onIntersection: () => void,
  threshold = 0
): void {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const node = elementRef?.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setEntry(entry), {
      threshold,
    });
    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold]);

  useEffect(() => {
    if (entry?.isIntersecting) onIntersection();
  }, [listLength, entry, onIntersection]);
}
export default useIntersectionObserver;
