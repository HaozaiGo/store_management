import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { authRes } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { MainNav } from "@/components/shared/main-nav";
import { Sidebar } from "@/components/shared/sidebar";

const inter = Inter({ subsets: ["latin"] });

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
    //   <html lang="zh-CN">
    //     <body className={inter.className}>
    //       <div className="flex min-h-screen">
    //         <Sidebar />
    //         <div className="flex-1">
    //           <MainNav />
    //           <main className="p-6">{children}</main>
    //         </div>
    //       </div>
    //       <Toaster />
    //     </body>
    //   </html>
    // </SessionProvider>
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="flex min-h-screen">
        <Sidebar />
          <div className="flex-1">
            <MainNav />
            <main className="p-6">{children}</main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
