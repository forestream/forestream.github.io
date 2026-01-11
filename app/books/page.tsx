import Link from "next/link";
import { getChildDirectories } from "@/utils/get-child-directories";
import { join } from "path";

export default async function Page() {
  const directories = await getChildDirectories(
    join(process.cwd(), "app", "books"),
  );

  return (
    <ul>
      <h1>Books</h1>
      {directories.map((dir) => (
        <li key={dir}>
          <Link href={`/books/${dir}`} className="hover:underline">
            {dir}
          </Link>
        </li>
      ))}
    </ul>
  );
}
