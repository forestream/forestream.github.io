import { promises as fs } from "fs";

export async function getChildDirectories(
  parentPath: string,
): Promise<string[]> {
  try {
    const entries = await fs.readdir(parentPath, { withFileTypes: true });
    const directories = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort((a, b) => b.localeCompare(a));

    return directories;
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}
