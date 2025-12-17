import { LogsProvider } from "./logs-provider";
import { getChildDirectories } from "@/utils/get-child-directories";
import { join } from "path";

export async function HeaderDataLayer({
  children,
}: {
  children: React.ReactNode;
}) {
  const dailyLogs = await getChildDirectories(
    join(process.cwd(), "app", "daily-logs"),
  );
  const devLogs = await getChildDirectories(
    join(process.cwd(), "app", "dev-logs"),
  );
  const stories = await getChildDirectories(
    join(process.cwd(), "app", "stories"),
  );
  return (
    <LogsProvider logs={{ dailyLogs, devLogs, stories }}>
      {children}
    </LogsProvider>
  );
}
