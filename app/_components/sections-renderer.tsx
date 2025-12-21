"use client";

import { Sections } from "./sections";

export function SectionsRenderer() {
  return (
    <Sections
      render={({ heading, key }) => (
        <li
          key={key}
          className="cursor-pointer hover:underline"
          onClick={() => {
            heading.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {heading.textContent}
        </li>
      )}
    />
  );
}
