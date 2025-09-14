import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function WideImage({
  className,
  ...props
}: ComponentProps<"img">) {
  return (
    <img
      {...props}
      className={twMerge(
        clsx("mx-auto aspect-video h-full max-h-1/2 object-contain", className),
      )}
    />
  );
}
