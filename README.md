# Shine Laban

Premium Apple-style website for the luxury Egyptian dessert brand "Shine Laban", built with Next.js App Router, Tailwind CSS, GSAP ScrollTrigger, and Lenis.

## Stack

- Next.js App Router
- Tailwind CSS
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- TypeScript

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Image Sequence

- The hero expects 80 frames in `public/frames/`.
- Naming format: `cappy.realesrgan_000.jpg` through `cappy.realesrgan_079.jpg`.
- Mobile mode automatically uses a reduced 40-frame sequence by skipping every second frame.

The workspace already includes the copied frames in:

- `public/frames/`

## Main Files

- `app/page.tsx`
- `components/hero-animation.tsx`
- `components/hero-content.tsx`
- `components/featured-products.tsx`
- `components/experience-section.tsx`
- `components/smooth-scroll-provider.tsx`
- `lib/content.ts`
