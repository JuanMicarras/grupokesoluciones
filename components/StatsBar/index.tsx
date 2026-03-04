"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 24, suffix: "/7", label: "Disponibilidad" },
  { value: 20, prefix: "+", label: "Años de experiencia" },
  { value: 15, prefix: "+", label: "Marcas soportadas" },
];

function Counter({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 50;
          const increment = target / steps;
          const stepTime = duration / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="statsBar">
      {STATS.map((stat) => (
        <div key={stat.label} className="statItem">
          <p className="statValue">
            <Counter
              target={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          </p>
          <p className="statLabel">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
