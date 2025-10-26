"use client";

import { createContext } from "react";
import { useContext } from "react";

const LogsContext = createContext<{
  dailyLogs: string[];
  devLogs: string[];
} | null>(null);

export function LogsProvider({
  logs,
  children,
}: {
  logs: {
    dailyLogs: string[];
    devLogs: string[];
  };
  children: React.ReactNode;
}) {
  return <LogsContext.Provider value={logs}>{children}</LogsContext.Provider>;
}
export function useLogs() {
  const logs = useContext(LogsContext);
  if (!logs) {
    throw new Error("useLogs must be used within a LogsProvider");
  }
  return logs;
}
