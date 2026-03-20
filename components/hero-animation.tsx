"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 80;
const EAGER_LOAD_COUNT = 14;
const HERO_COPY = [
  "Crafted in Layers.",
  "Rich. Creamy. Indulgent.",
  "A Taste of Egypt."
] as const;

type IdleCallbackHandle = number | ReturnType<typeof setTimeout>;

function buildFrameSources() {
  return Array.from({ length: TOTAL_FRAMES }, (_, index) => {
    const frameNumber = index;
    return `/frames/cappy.realesrgan_${String(frameNumber).padStart(3, "0")}.jpg`;
  });
}

function getOverlayState(frame: number) {
  if (frame < 25) {
    return { show: false, index: 0 };
  }

  if (frame <= 45) {
    return { show: true, index: 0 };
  }

  if (frame < 52) {
    return { show: false, index: 0 };
  }

  if (frame <= 62) {
    return { show: true, index: 1 };
  }

  if (frame < 68) {
    return { show: false, index: 1 };
  }

  if (frame <= 78) {
    return { show: true, index: 2 };
  }

  return { show: false, index: 2 };
}

export function HeroAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const copyIndexRef = useRef(0);
  const showTextRef = useRef(false);
  const [currentText, setCurrentText] = useState<(typeof HERO_COPY)[number]>(HERO_COPY[0]);
  const [showText, setShowText] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) {
      return;
    }

    const context = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!context) {
      return;
    }

    let destroyed = false;
    let idleHandle: IdleCallbackHandle | null = null;
    let usedIdleCallback = false;
    let resizeObserver: ResizeObserver | null = null;
    let currentFrame = 0;

    const frameSources = buildFrameSources();
    const images: Array<HTMLImageElement | null> = Array.from({ length: frameSources.length }, () => null);
    const loadedFrames = new Set<number>();

    const updateOverlayCopy = (target: number) => {
      const { show, index: nextIndex } = getOverlayState(target);

      if (show !== showTextRef.current) {
        showTextRef.current = show;
        setShowText(show);
      }

      if (!show) {
        return;
      }

      if (nextIndex === copyIndexRef.current) {
        return;
      }

      copyIndexRef.current = nextIndex;
      setCurrentText(HERO_COPY[nextIndex]);
    };

    const syncCanvas = () => {
      const isMobile = window.innerWidth < 768;
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      context.setTransform(1, 0, 0, 1, 0, 0);
      return { width, height, isMobile };
    };

    const paintBackdrop = () => {
      const { width, height } = syncCanvas();
      context.clearRect(0, 0, width, height);

      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(18, 43, 104, 0.95)");
      gradient.addColorStop(0.45, "rgba(11, 31, 77, 0.86)");
      gradient.addColorStop(1, "rgba(7, 19, 43, 1)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    };

    const drawImage = (image: HTMLImageElement) => {
      const { width, height, isMobile } = syncCanvas();
      context.clearRect(0, 0, width, height);

      const sourceWidth = image.naturalWidth || image.width;
      const sourceHeight = image.naturalHeight || image.height;
      const hRatio = width / sourceWidth;
      const vRatio = height / sourceHeight;
      let scale = Math.max(hRatio, vRatio);

      if (isMobile) {
        scale *= 0.88;
      }

      const drawWidth = sourceWidth * scale;
      const drawHeight = sourceHeight * scale;
      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(image, 0, 0, sourceWidth, sourceHeight, x, y, drawWidth, drawHeight);

      const vignette = context.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.12,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.7
      );
      vignette.addColorStop(0, "rgba(255, 255, 255, 0)");
      vignette.addColorStop(0.72, "rgba(7, 19, 43, 0.16)");
      vignette.addColorStop(1, "rgba(7, 19, 43, 0.72)");
      context.fillStyle = vignette;
      context.fillRect(0, 0, width, height);
    };

    const resolveFrame = (target: number) => {
      if (loadedFrames.has(target)) {
        return target;
      }

      for (let offset = 1; offset < frameSources.length; offset += 1) {
        if (target - offset >= 0 && loadedFrames.has(target - offset)) {
          return target - offset;
        }

        if (target + offset < frameSources.length && loadedFrames.has(target + offset)) {
          return target + offset;
        }
      }

      return 0;
    };

    const renderFrame = (target: number) => {
      currentFrame = target;
      updateOverlayCopy(target);

      if (!loadedFrames.size) {
        paintBackdrop();
        return;
      }

      const safeIndex = resolveFrame(target);
      const image = images[safeIndex];
      if (!image || !image.complete) {
        paintBackdrop();
        return;
      }

      drawImage(image);
    };

    const loadFrame = (index: number) =>
      new Promise<void>((resolve) => {
        if (images[index]?.complete) {
          loadedFrames.add(index);
          resolve();
          return;
        }

        const image = new window.Image();
        image.decoding = "async";

        image.onload = () => {
          if (destroyed) {
            resolve();
            return;
          }

          images[index] = image;
          loadedFrames.add(index);

          if (index === 0 || Math.abs(index - currentFrame) <= 1) {
            renderFrame(currentFrame);
          }

          resolve();
        };

        image.onerror = () => resolve();
        image.src = frameSources[index];
        images[index] = image;
      });

    const queueLazyFrames = () => {
      const lazyLoad = () => {
        for (let index = EAGER_LOAD_COUNT; index < frameSources.length; index += 1) {
          void loadFrame(index);
        }
      };

      if ("requestIdleCallback" in window) {
        usedIdleCallback = true;
        idleHandle = window.requestIdleCallback(lazyLoad, { timeout: 1200 });
        return;
      }

      idleHandle = globalThis.setTimeout(lazyLoad, 260);
    };

    paintBackdrop();

    const onResize = () => renderFrame(currentFrame);
    resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(section);
    window.addEventListener("resize", onResize);

    const ctx = gsap.context(() => {
      void Promise.all(
        frameSources
          .slice(0, Math.min(EAGER_LOAD_COUNT, frameSources.length))
          .map((_, index) => loadFrame(index))
      ).then(() => {
        if (destroyed) {
          return;
        }

        renderFrame(0);
        queueLazyFrames();
      });

      const playhead = { frame: 0 };
      const timeline = gsap.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${window.innerHeight * 2.8}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      timeline.to(
        playhead,
        {
          frame: frameSources.length - 1,
          duration: 1,
          onUpdate: () => renderFrame(Math.round(playhead.frame))
        },
        0
      );
    }, section);

    return () => {
      destroyed = true;
      ctx.revert();

      if (idleHandle !== null) {
        if (usedIdleCallback && "cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleHandle as number);
        } else {
          globalThis.clearTimeout(idleHandle as ReturnType<typeof setTimeout>);
        }
      }

      resizeObserver?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section ref={sectionRef} id="intro" className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 block h-screen w-full" aria-hidden="true" />

      <div className="canvas-vignette absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center translate-y-[100px] md:translate-y-[150px] lg:translate-y-[170px]">
        <div className="px-4 md:px-6">
          <h2
            className={`shimmer-text text-balance bg-gradient-to-r from-[#d4af37] via-[#f5d27a] to-[#d4af37] bg-clip-text text-center font-serif text-xl font-light tracking-[0.04em] text-transparent drop-shadow-[0_0_8px_rgba(212,175,55,0.3)] transition-all duration-700 ease-out md:text-4xl ${
              showText ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0"
            }`}
          >
            {currentText}
          </h2>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/75 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink via-ink/72 to-transparent" />
      <div className="scroll-hint pointer-events-none absolute bottom-6 left-1/2 z-10 text-xs tracking-wide text-white/50 md:bottom-8">
        Scroll to explore &darr;
      </div>
    </section>
  );
}
