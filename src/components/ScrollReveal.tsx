"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type AnimationType = "slide-up" | "scale-in" | "reveal" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span";
}

interface ScrollRevealStaggerProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = "slide-up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${isVisible ? `animate-${animation}` : "opacity-0"} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </Tag>
  );
}

export function ScrollRevealStagger({
  children,
  animation = "slide-up",
  staggerDelay = 100,
  className = "",
}: ScrollRevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className={isVisible ? `animate-${animation}` : "opacity-0"}
          style={{
            animationDelay: `${i * staggerDelay}ms`,
            animationFillMode: "forwards",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
