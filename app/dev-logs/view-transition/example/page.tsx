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
      <div
        className="[&_button]:cursor-pointer [&_button]:border [&_button]:px-2"
        dangerouslySetInnerHTML={{ __html: page.toString() }}
      />
      <span className="mt-10 inline-block text-xs text-slate-500">
        View Transition 학습용 페이지. 스타일 외에 기능 없음
      </span>
      <Script src={script.toString()} />
    </>
  );
}
