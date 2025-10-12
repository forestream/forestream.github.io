import Link from "next/link";
import { getLogDirectories } from "@/utils/get-log-directories";

export default async function Page() {
  const directories = await getLogDirectories();

  return (
    <ul>
      <h1>Logs</h1>
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
