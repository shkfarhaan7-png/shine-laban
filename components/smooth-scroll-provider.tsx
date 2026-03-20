"use client";

import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({ children }: PropsWithChildren) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const instance = new Lenis({
      duration: isMobile ? 0.95 : 1.15,
      lerp: isMobile ? 0.08 : 0.1,
      smoothWheel: true,
      wheelMultiplier: isMobile ? 0.86 : 0.92,
      touchMultiplier: isMobile ? 1 : 1.15,
      syncTouch: false
    });

    setLenis(instance);
    instance.on("scroll", ScrollTrigger.update);

    let frameId = 0;
    const raf = (time: number) => {
      instance.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.cancelAnimationFrame(frameId);
      instance.off("scroll", ScrollTrigger.update);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
