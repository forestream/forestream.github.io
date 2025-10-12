import { promises as fs } from "fs";
import { join } from "path";

export async function getLogDirectories(): Promise<string[]> {
  const logsPath = join(process.cwd(), "app", "logs");

  try {
    const entries = await fs.readdir(logsPath, { withFileTypes: true });
    const directories = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort((a, b) => b.localeCompare(a)); // Sort in descending order (newest first)

    return directories;
  } catch (error) {
    console.error("Error reading logs directory:", error);
    return [];
  }
}
