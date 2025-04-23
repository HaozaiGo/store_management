import type { Metadata } from "next";
import RootLayout from "./page";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "仓库管理平台",
};

console.log(auth);

export default function PageHeader({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <RootLayout>{children}</RootLayout>;
}
