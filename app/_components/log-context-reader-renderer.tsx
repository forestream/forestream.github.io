"use client";
import { LogContextReader } from "./log-context-reader";
import Link from "next/link";

export function LogContextReaderRenderer({
  pathnamePrefix,
}: {
  pathnamePrefix: string;
}) {
  return (
    <LogContextReader
      logKey="dailyLogs"
      render={({ log }) => (
        <Link href={`${pathnamePrefix}/${log}`}>
          <li className="cursor-pointer hover:underline">{log}</li>
        </Link>
      )}
    />
  );
}
