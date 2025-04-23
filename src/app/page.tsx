"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { MainNav } from "@/components/shared/main-nav";
import { Sidebar } from "@/components/shared/sidebar";
import { cn } from "@/lib/utils";
import useStore from "@/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const collapsed = useStore((state: any) => state.collapsed);

  // const session = await authRes();
  return (
    // <SessionProvider session={session}>
    <html lang="zh-CN">
      <body className={inter.className}>
        <MainNav />

        <div className="flex-1 min-h-screen">
          <Sidebar />
          <div>
            <main
              className={cn("fixed", collapsed ? "left-16 w-[calc(100vw-4rem)]" : "left-64 w-[calc(100vw-256px)]")}
            >
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
    // </SessionProvider>
  );
}
