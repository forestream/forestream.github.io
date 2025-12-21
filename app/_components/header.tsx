import Link from "next/link";
import { SectionsRenderer } from "./sections-renderer";
import { LogContextReaderRenderer } from "./log-context-reader-renderer";

export function Header() {
  return (
    <header className="sticky top-0 right-0 left-0 min-h-6 border-b border-slate-400 bg-white p-2 [&>button:not(:first-child)]:ml-4">
      <Link className="contents" href="/">
        <button className="cursor-pointer hover:underline">홈</button>
      </Link>
      <button
        popoverTarget="table-of-contents"
        className="anchor-[--table-of-contents] cursor-pointer hover:underline"
      >
        목차
      </button>
      <div
        popover="auto"
        id="table-of-contents"
        className="position-anchor-[--table-of-contents] top-[calc(anchor(bottom)+8px)] left-[anchor(left)] overflow-visible"
      >
        <ul className="p-2 shadow-md shadow-slate-800">
          <SectionsRenderer />
        </ul>
      </div>
      <button
        popoverTarget="daily-logs"
        className="anchor-[--daily-logs] cursor-pointer hover:underline"
      >
        데일리 로그
      </button>
      <div
        popover="auto"
        id="daily-logs"
        className="position-anchor-[--daily-logs] top-[calc(anchor(bottom)+8px)] left-[anchor(left)] overflow-visible"
      >
        <ul className="p-2 shadow-md shadow-slate-800">
          <LogContextReaderRenderer pathnamePrefix="/daily-logs" />
        </ul>
      </div>
      <button
        popoverTarget="dev-logs"
        className="anchor-[--dev-logs] cursor-pointer hover:underline"
      >
        데브 로그
      </button>
      <div
        popover="auto"
        id="dev-logs"
        className="position-anchor-[--dev-logs] top-[calc(anchor(bottom)+8px)] left-[anchor(left)] overflow-visible"
      >
        <ul className="p-2 shadow-md shadow-slate-800">
          <LogContextReaderRenderer pathnamePrefix="/dev-logs" />
        </ul>
      </div>
      <button
        popoverTarget="stories"
        className="anchor-[--stories] cursor-pointer hover:underline"
      >
        이야기
      </button>
      <div
        popover="auto"
        id="stories"
        className="position-anchor-[--stories] top-[calc(anchor(bottom)+8px)] left-[anchor(left)] overflow-visible"
      >
        <ul className="p-2 shadow-md shadow-slate-800">
          <LogContextReaderRenderer pathnamePrefix="/stories" />
        </ul>
      </div>
    </header>
  );
}
