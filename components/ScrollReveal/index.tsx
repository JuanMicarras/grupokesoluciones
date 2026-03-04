"use client";

import { useEffect, useRef, ReactNode } from "react";

/* ─── Shared single IntersectionObserver ─── */
let sharedObserver: IntersectionObserver | null = null;
const callbacks = new Map<Element, { delay: number }>();

function getObserver() {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const meta = callbacks.get(el);
          const delay = meta?.delay ?? 0;

          if (delay > 0) {
            setTimeout(() => el.classList.add("revealed"), delay);
          } else {
            el.classList.add("revealed");
          }

          sharedObserver!.unobserve(el);
          callbacks.delete(el);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  return sharedObserver;
}

/* ─── Component ─── */
interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getObserver();
    callbacks.set(el, { delay });
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
