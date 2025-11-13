export default function ChildPage() {
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
      <div>Child Page</div>
      <div className="mt-4">
        <a
          href="/dev-logs/view-transition/example"
          className="underline duration-100 hover:text-slate-400"
        >
          MPA View Transition - Go to Parent Page
        </a>
      </div>
    </>
  );
}
