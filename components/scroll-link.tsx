"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";

import { useLenis } from "@/components/smooth-scroll-provider";

type ScrollLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  offset?: number;
};

export function ScrollLink({
  children,
  href,
  offset = -100,
  onClick,
  ...props
}: ScrollLinkProps) {
  const lenis = useLenis();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !href.startsWith("#")) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", href);

    if (lenis) {
      lenis.scrollTo(target, { offset });
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
