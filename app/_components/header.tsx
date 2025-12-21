import Link from "next/link";
import { SectionsRenderer } from "./sections-renderer";
import { LogContextReaderRenderer } from "./log-context-reader-renderer";
import { Button } from "./common/button";

export function Header() {
  return (
    <header className="sticky top-0 right-0 left-0 min-h-6 border-b border-slate-400 bg-white p-2 [&>button:not(:first-child)]:ml-4">
      <Link className="contents" href="/">
        <Button>
          <Button.Sheet>홈</Button.Sheet>
        </Button>
      </Link>
      <Button
        popoverTarget="table-of-contents"
        className="anchor-[--table-of-contents]"
      >
        <Button.Sheet>목차</Button.Sheet>
      </Button>
      <div
        popover="auto"
        id="table-of-contents"
        className="position-anchor-[--table-of-contents] top-[calc(anchor(bottom)+8px)] left-[anchor(left)] overflow-visible"
      >
        <ul className="p-2 shadow-md shadow-slate-800">
          <SectionsRenderer />
        </ul>
      </div>
      <Button popoverTarget="daily-logs" className="anchor-[--daily-logs]">
        <Button.Sheet>데일리 로그</Button.Sheet>
      </Button>
      <div
        popover="auto"
        id="daily-logs"
        className="position-anchor-[--daily-logs] top-[calc(anchor(bottom)+8px)] left-[anchor(left)] overflow-visible"
      >
        <ul className="p-2 shadow-md shadow-slate-800">
          <LogContextReaderRenderer
            pathnamePrefix="/daily-logs"
            logKey="dailyLogs"
          />
        </ul>
      </div>
      <Button popoverTarget="dev-logs" className="anchor-[--dev-logs]">
        <Button.Sheet>데브 로그</Button.Sheet>
      </Button>
      <div
        popover="auto"
        id="dev-logs"
        className="position-anchor-[--dev-logs] top-[calc(anchor(bottom)+8px)] left-[anchor(left)] overflow-visible"
      >
        <ul className="p-2 shadow-md shadow-slate-800">
          <LogContextReaderRenderer
            pathnamePrefix="/dev-logs"
            logKey="devLogs"
          />
        </ul>
      </div>
      <Button popoverTarget="stories" className="anchor-[--stories]">
        <Button.Sheet>이야기</Button.Sheet>
      </Button>
      <div
        popover="auto"
        id="stories"
        className="position-anchor-[--stories] top-[calc(anchor(bottom)+8px)] left-[anchor(left)] overflow-visible"
      >
        <ul className="p-2 shadow-md shadow-slate-800">
          <LogContextReaderRenderer
            pathnamePrefix="/stories"
            logKey="stories"
          />
        </ul>
      </div>
    </header>
  );
}
