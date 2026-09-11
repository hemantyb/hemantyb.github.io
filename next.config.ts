import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  basePath: "",
  output: "export", // Required for GitHub Pages static hosting
  trailingSlash: true, // Export routes as directories for GitHub Pages
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js dynamic image optimization
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
