"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      let current = ids[0];

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          current = id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handler);
    handler(); // initial run

    return () => window.removeEventListener("scroll", handler);
  }, [ids]);

  return activeId;
}