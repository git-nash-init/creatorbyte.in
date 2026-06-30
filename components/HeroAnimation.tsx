"use client";

import { useEffect, useRef } from "react";

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let anim: import("lottie-web").AnimationItem | null = null;
    let cancelled = false;

    import("lottie-web").then(({ default: lottie }) => {
      if (cancelled || !node) return;
      anim = lottie.loadAnimation({
        container: node,
        renderer: "svg",
        loop: true,
        autoplay: !reduce,
        path: "/assets/hero-animation.json",
        rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
      });
    });

    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="CreatorByte characters marching together"
      className="mx-auto aspect-[1561/837] w-full max-w-[700px]"
    />
  );
}
