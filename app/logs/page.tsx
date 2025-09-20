import { promises as fs } from "fs";
import { join } from "path";
import Link from "next/link";

async function getLogDirectories(): Promise<{
  logsPath: string;
  directories: string[];
}> {
  const logsPath = join(process.cwd(), "app", "logs");

  try {
    const entries = await fs.readdir(logsPath, { withFileTypes: true });
    const directories = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort((a, b) => b.localeCompare(a)); // Sort in descending order (newest first)

    return { logsPath, directories };
  } catch (error) {
    console.error("Error reading logs directory:", error);
    return { logsPath, directories: [] };
  }
}

export default async function Page() {
  const { logsPath, directories } = await getLogDirectories();

  return (
    <ul>
      <h1>Logs</h1>
      {logsPath}
      {directories.map((dir) => (
        <li key={dir}>
          <Link href={`/logs/${dir}`} className="hover:underline">
            {dir}
          </Link>
        </li>
      ))}
    </ul>
  );
}
