"use client";

import { useEffect } from "react";

/**
 * Adds or removes the `dark` class on <html> based on system preference
 * (and keeps it in sync).  This mirrors the small script that was included
 * in the static HTML sample from the user.
 */
export default function ThemeInitializer() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const updateClass = (isDark: boolean) => {
      document.documentElement.classList.toggle("dark", isDark);
    };

    // initialise
    updateClass(media.matches);

    // listen for changes
    const listener = (e: MediaQueryListEvent) => {
      updateClass(e.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return null;
}
