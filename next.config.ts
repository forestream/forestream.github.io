import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypePrettyCode, { Options } from "rehype-pretty-code";

const rehypeOptions: Options = {
  theme: "material-theme",
  grid: false,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
  },
});

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "md", "mdx", "jsx", "js"],
  turbopack: {
    resolveExtensions: [".ts", ".tsx", ".md", ".mdx", ".jsx", ".js"],
  },
};

export default withMDX(nextConfig);
