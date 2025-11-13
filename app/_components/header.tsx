"use client";

import { Sections } from "./sections";
import Link from "next/link";
import { LogContextReader } from "./log-context-reader";

export function Header() {
  return (
    <header className="sticky top-0 right-0 left-0 min-h-6 border-b border-slate-400 bg-white p-2 [&>button:not(:first-child)]:ml-4">
      <Link className="contents" href="/">
        <button className="cursor-pointer hover:underline">홈</button>
      </Link>
      <button popoverTarget="list" className="cursor-pointer hover:underline">
        목차
      </button>
      <div popover="auto" id="list" className="mt-10 ml-8 overflow-visible">
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
      <button
        popoverTarget="daily-logs"
        className="cursor-pointer hover:underline"
      >
        데일리 로그
      </button>
      <div
        popover="auto"
        id="daily-logs"
        className="mt-10 ml-20 overflow-visible"
      >
        <ul className="p-2 shadow-md shadow-slate-800">
          <LogContextReader
            logKey="dailyLogs"
            render={({ log }) => (
              <Link href={`/daily-logs/${log}`}>
                <li className="cursor-pointer hover:underline">{log}</li>
              </Link>
            )}
          />
        </ul>
      </div>
      <button
        popoverTarget="dev-logs"
        className="cursor-pointer hover:underline"
      >
        데브 로그
      </button>
      <div
        popover="auto"
        id="dev-logs"
        className="mt-10 ml-44 overflow-visible"
      >
        <ul className="p-2 shadow-md shadow-slate-800">
          <LogContextReader
            logKey="devLogs"
            render={({ log }) => (
              <Link href={`/dev-logs/${log}`}>
                <li className="cursor-pointer hover:underline">{log}</li>
              </Link>
            )}
          />
        </ul>
      </div>
    </header>
  );
}
