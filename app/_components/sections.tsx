"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export function Sections({
  render,
}: {
  render: ({
    heading,
    key,
  }: {
    heading: HTMLElement;
    key: string;
  }) => ReactNode;
}) {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<HTMLElement[]>([]);
  useEffect(() => {
    const nextHeadings = Array.from(document.querySelectorAll("h1, h2"));
    setHeadings(nextHeadings as HTMLElement[]);
  }, [pathname]);
  return headings.map((heading: HTMLElement) =>
    render({ heading, key: heading.id + heading.innerText }),
  );
}
