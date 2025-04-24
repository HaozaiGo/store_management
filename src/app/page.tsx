"use client";
import "./globals.css";
import { Sidebar } from "@/components/shared/sidebar";
import { cn } from "@/lib/utils";
import useStore from "@/store";

// import { hadLogin } from "@/auth/authUtils";

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const collapsed = useStore((state: any) => state.collapsed);
  return (
    
      <div className="flex-1 min-h-screen">
        <Sidebar />
        <div>
          <main
            className={cn(
              "fixed",
              collapsed
                ? "left-16 w-[calc(100vw-4rem)]"
                : "left-64 w-[calc(100vw-256px)]"
            )}
          >
            {children}
          </main>
        </div>
      </div>
  );
}
