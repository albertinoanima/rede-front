"use client";

import { useEffect } from "react";

type ScrollToTopProps = {
  scrollKey: string;
};

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollKey }) => {
  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [scrollKey]);

  return null;
};