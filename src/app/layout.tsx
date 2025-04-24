import type { Metadata } from "next";
import RootLayout from "./page";
import { MainNav } from "@/components/shared/main-nav";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "仓库管理平台",
};

export default function PageHeader({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <MainNav />
        <RootLayout>{children}</RootLayout>;
        <Toaster />
      </body>
    </html>
  );
}
