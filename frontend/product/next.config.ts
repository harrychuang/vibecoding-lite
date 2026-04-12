import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // 與 monorepo 內 storybook workspace 對齊；避免誤用使用者家目錄的 lockfile 當 root 而讓 SVG 等資源路徑錯誤（img 破圖）。
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  transpilePackages: ["storybook"],
};

export default nextConfig;
