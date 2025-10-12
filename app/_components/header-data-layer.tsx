import { LogsProvider } from "./logs-provider";
import { getLogDirectories } from "@/utils/get-log-directories";

export async function HeaderDataLayer({
  children,
}: {
  children: React.ReactNode;
}) {
  const logs = await getLogDirectories();
  return <LogsProvider logs={logs}>{children}</LogsProvider>;
}
