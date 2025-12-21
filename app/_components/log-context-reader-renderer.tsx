"use client";
import { ComponentProps } from "react";
import { LogContextReader } from "./log-context-reader";
import Link from "next/link";

export function LogContextReaderRenderer({
  logKey,
  pathnamePrefix,
}: {
  pathnamePrefix: string;
  logKey: ComponentProps<typeof LogContextReader>["logKey"];
}) {
  return (
    <LogContextReader
      logKey={logKey}
      render={({ log }) => (
        <Link href={`${pathnamePrefix}/${log}`}>
          <li className="cursor-pointer hover:underline">{log}</li>
        </Link>
      )}
    />
  );
}
