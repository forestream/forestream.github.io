import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Next Cache",
  description: "My study results about Next Cache.",
  keywords: ["Next", "Cache", "Study", "넥스트", "캐시"],
};

export default function Page() {
  return <Content />;
}
