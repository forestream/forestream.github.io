"use client";

import { ReactNode, useEffect, useState } from "react";

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
  const [headings, setHeadings] = useState<HTMLElement[]>([]);
  useEffect(() => {
    const nextHeadings = Array.from(document.querySelectorAll("h1, h2"));
    setHeadings(nextHeadings as HTMLElement[]);
  }, []);
  return headings.map((heading: HTMLElement) =>
    render({ heading, key: heading.id }),
  );
}
