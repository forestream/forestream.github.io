import clsx from "clsx";
import type { MDXComponents } from "mdx/types";
import { twMerge } from "tailwind-merge";

const components: MDXComponents = {
  ul: (props) => (
    <ul
      className="list-disc pl-4 marker:text-xs [ul_&]:list-disc [ul_&]:marker:text-slate-400"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-4 marker:text-xs [ol_&]:list-decimal [ol_&]:marker:text-slate-400"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
