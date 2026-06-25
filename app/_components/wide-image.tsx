import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import Image from "next/image";

export default function WideImage({
  className,
  alt,
  ...props
}: ComponentProps<typeof Image>) {
  return (
    <Image
    {...props}
    alt={alt||''}
      className={twMerge(
        clsx("mx-auto aspect-video h-full max-h-1/2 object-contain", className),
      )}
    />
  );
}
