import Link from "next/link";
import { getChildDirectories } from "@/utils/get-child-directories";
import { join } from "path";

export default async function Page() {
  const directories = await getChildDirectories(
    join(process.cwd(), "app", "dev-logs"),
  );

  return (
    <ul>
      <h1>Dev Logs</h1>
      {directories.map((dir) => (
        <li key={dir}>
          <Link href={`/dev-logs/${dir}`} className="hover:underline">
            {dir}
          </Link>
        </li>
      ))}
    </ul>
  );
}
