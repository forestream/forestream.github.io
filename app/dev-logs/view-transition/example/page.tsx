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
      <style>
        {`
@view-transition {
navigation: auto;
}

@keyframes move-out {
from {
transform: translateY(0%);
}

to {
transform: translateY(-100%);
}
}

@keyframes move-in {
from {
transform: translateY(100%);
}

to {
transform: translateY(0%);
}
}

/* Apply the custom animation to the old and new page states */
::view-transition-old(root) {
animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
animation: 0.4s ease-in both move-in;
}
      `}
      </style>
      <div
        className="[&_button]:cursor-pointer [&_button]:border [&_button]:px-2"
        dangerouslySetInnerHTML={{ __html: page.toString() }}
      />
      <div className="mt-4">
        <a
          href="/dev-logs/view-transition/example/child"
          className="underline duration-100 hover:text-slate-400"
        >
          MPA View Transition - Go to Child Page
        </a>
      </div>
      <span className="mt-10 inline-block text-xs text-slate-500">
        View Transition 학습용 페이지. 스타일 외에 기능 없음
      </span>
      <Script src={script.toString()} />
    </>
  );
}
