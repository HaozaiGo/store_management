import type { Metadata } from "next";
import RootPage from "./page";
import LoginPage from "./login/page";
import { MainNav } from "@/components/shared/main-nav";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import AuthSessionProvider from "@/components/shared/providers/session-provider";

import { isLoggedIn } from "@/auth";
export const metadata: Metadata = {
  title: "仓库管理平台",
};
export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const loggedIn = isLoggedIn();
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {loggedIn ? (
          <LoginPage />
        ) : (
          <>
            <AuthSessionProvider>
              <MainNav />
              <RootPage>{children}</RootPage>;
              <Toaster />
            </AuthSessionProvider>
          </>
        )}
      </body>
    </html>
  );
}
