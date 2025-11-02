"use client";

import { useEffect, useRef } from "react";

export function Script({ src }: { src: string }) {
  const ref = useRef<HTMLScriptElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    (ref.current as HTMLScriptElement).innerText = src;
  }, [src]);

  return <script ref={ref} />;
}
