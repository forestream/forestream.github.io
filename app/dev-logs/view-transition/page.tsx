import { Metadata } from "next";
import Content from "./Content.mdx";

export const metadata: Metadata = {
  title: "View Transition",
  description: "View Transition",
  keywords: ["View Transition", "CSS", "JavaScript", "HTML", "vanilla"],
};

export default function ViewTransitionPage() {
  return <Content />;
}
