import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Forestream Convention",
  description: "My study results about Forestream Convention.",
  keywords: ["Forestream", "Convention", "Study", "forestream", "convention"],
};

export default function Page() {
  return <Content />;
}
