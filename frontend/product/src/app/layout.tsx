import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "storybook/styles/tokens.css";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Profile",
  description: "Link-in-bio profile card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
