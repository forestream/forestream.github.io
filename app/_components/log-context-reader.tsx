"use client";

import { Fragment, ReactNode } from "react";
import { useLogs } from "./logs-provider";

export function LogContextReader({
  render,
  logKey,
}: {
  render?: ({ log }: { log: string }) => ReactNode;
  logKey: "dailyLogs" | "devLogs" | "stories";
}) {
  const logs = useLogs();
  return render
    ? logs[logKey].map((log) => (
        <Fragment key={log}>{render({ log })}</Fragment>
      ))
    : logs[logKey];
}
