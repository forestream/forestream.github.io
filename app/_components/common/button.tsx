import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Button({ className, ...props }: ComponentProps<"button">) {
  return (
    <button
      className={twMerge(
        "group relative cursor-pointer overflow-hidden rounded-[4px] p-0.25 before:absolute before:top-0 before:left-0 before:aspect-square before:w-[200%] before:-translate-x-1/4 before:-translate-y-1/4 before:border-2 before:border-transparent before:bg-[linear-gradient(to_right,var(--color-blue-700),red)] before:bg-origin-border before:transition-all before:duration-750 hover:before:rotate-360",
        className,
      )}
      {...props}
    />
  );
}

function Sheet({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "relative z-10 rounded-[3px] bg-white px-2.5 py-1.5 leading-none transition-opacity duration-500 group-hover:opacity-90",
        className,
      )}
      {...props}
    />
  );
}

Button.Sheet = Sheet;
