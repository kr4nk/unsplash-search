import { useEffect } from "react";

export const useInfiniteScroll = ({
  sentinelRef,
  isLoading,
  hasMore,
  onLoadMore,
  rootMargin = "200px",
}) => {
  useEffect(() => {
    if (isLoading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onLoadMore();
        }
      },
      { rootMargin },
    );
    const currentSentinel = sentinelRef.current;
    if (currentSentinel) {
      observer.observe(currentSentinel);
    }
    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel);
      }
    };
  }, [isLoading, hasMore, onLoadMore, sentinelRef, rootMargin]);
};
