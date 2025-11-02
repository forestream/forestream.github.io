import "./_assets/keyframes.css";
import "./_assets/style.css";
import fs from "fs/promises";
import { join } from "path";
import { Script } from "./_components/script";

export default async function ExamplePage() {
  const page = await fs.readFile(
    join(
      process.cwd(),
      "app",
      "dev-logs",
      "view-transition",
      "example",
      "_assets",
      "index.html",
    ),
  );

  const script = await fs.readFile(
    join(
      process.cwd(),
      "app",
      "dev-logs",
      "view-transition",
      "example",
      "_assets",
      "main.js",
    ),
  );

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: page.toString() }} />
      <Script src={script.toString()} />
    </>
  );
}
