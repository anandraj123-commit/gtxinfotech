
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    let attempts = 0;
    let timer;

    const scrollToSection = () => {
      const id = decodeURIComponent(hash.slice(1));
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }

      // Retry if the section hasn't rendered yet
      if (attempts < 20) {
        attempts++;
        timer = window.setTimeout(scrollToSection, 150);
      }
    };

    timer = window.setTimeout(scrollToSection, 100);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
