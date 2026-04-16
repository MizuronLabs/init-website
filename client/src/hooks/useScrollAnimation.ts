import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    const el = ref.current;
    if (!el) return;

    // Observe all current fade-up elements
    const children = el.querySelectorAll(".fade-up");
    children.forEach((child) => observer.observe(child));

    // Also watch for dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      const newChildren = el.querySelectorAll(".fade-up:not(.visible)");
      newChildren.forEach((child) => observer.observe(child));
    });
    mutationObserver.observe(el, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return ref;
}
