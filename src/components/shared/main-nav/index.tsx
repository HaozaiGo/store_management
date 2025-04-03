// "use client"

import Link from "next/link"
// import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navConfig } from "./nav-items"
import { UserDropdown } from "./user-dropdown"
// import { auth } from "@/auth"

export async function MainNav() {
  // const session = await auth()
  // const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* 品牌LOGO */}
        <Link href="/dashboard" className="flex items-center space-x-2">
          <span className="text-lg font-bold">商场管理系统</span>
        </Link>

        {/* 主导航菜单 */}
        <nav className="hidden md:flex items-center space-x-6">
          {navConfig.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              // className={cn(
              //   "text-sm font-medium transition-colors hover:text-primary",
              //   pathname === item.href ? "text-primary" : "text-muted-foreground"
              // )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* 右侧用户区 */}
        <div className="flex items-center gap-4">
          {/* <UserDropdown user={session?.user} /> */}
        </div>
      </div>
    </header>
  )
}