import { RefObject, useEffect, useState } from 'react';

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  threshold = 0
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    if (!node) return;
    const observer = new IntersectionObserver(updateEntry, { threshold });
    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold]);

  return entry;
}
export default useIntersectionObserver;
