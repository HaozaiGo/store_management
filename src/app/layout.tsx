
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { authRes } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { MainNav } from "@/components/shared/main-nav";
import { Sidebar } from "@/components/shared/sidebar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const [collapsed, setCollapsed] = useState(false);

export const metadata: Metadata = {
  title: "商场后台管理系统",
  description: "商场后台管理系统",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await authRes();
  return (
    // <SessionProvider session={session}>
    <html lang="zh-CN">
      <body className={inter.className}>
        <MainNav />

        <div className="flex-1 min-h-screen">
          <Sidebar collapsed={collapsed} />
          <div className="">
            <main className="flex">{children}</main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
    // </SessionProvider>
  );
}
