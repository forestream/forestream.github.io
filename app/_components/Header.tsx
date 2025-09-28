"use client";

import { Sections } from "./Sections";

export function Header() {
  return (
    <header className="sticky top-0 right-0 left-0 min-h-6 border-b border-slate-400 bg-white p-2">
      <button popoverTarget="list" className="cursor-pointer hover:underline">
        목록
      </button>
      <div popover="auto" id="list" className="mt-10 ml-6 overflow-visible">
        <ul className="p-2 shadow-md shadow-slate-800">
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
        </ul>
      </div>
    </header>
  );
}
