"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarLink } from "./sidebar-link";
import { ToggleButton } from "./toggle-button";
// import { useSession } from 'next-auth/react'
import useStore from "@/store";

export function Sidebar() {
  const collapsed = useStore((state: any) => state.collapsed);
  const setCollapsed = useStore((state: any) => state.updateCollapsed);
  // console.log(collapsed);

  // const [collapsed, setCollapsed] = useState(false);
  // const { data: session } = useSession()
  return (
    <aside
      className={cn(
        "fixed top-16 left-0 h-[calc(100vh-4rem)] border-r bg-background z-40 transition-all",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* 折叠按钮 */}
      <ToggleButton
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      {/* 导航菜单 */}
      <nav className="flex flex-col gap-1 p-2">
        <SidebarLink
          icon={<LayoutDashboard className="h-4 w-4" />}
          href="/dashboard"
          collapsed={collapsed}
        >
          仪表盘
        </SidebarLink>

        <SidebarLink
          icon={<Package className="h-4 w-4" />}
          href="/products"
          collapsed={collapsed}
        >
          商品管理
        </SidebarLink>

        <SidebarLink
          icon={<ShoppingCart className="h-4 w-4" />}
          href="/orders"
          collapsed={collapsed}
        >
          订单管理
        </SidebarLink>

        {
          <SidebarLink
            icon={<Users className="h-4 w-4" />}
            href="/login"
            collapsed={collapsed}
          >
            客户管理
          </SidebarLink>
        }
      </nav>

      {/* 底部设置 */}
      <div className="absolute bottom-0 w-full p-2 border-t">
        <SidebarLink
          icon={<Settings className="h-4 w-4" />}
          href="/settings"
          collapsed={collapsed}
        >
          系统设置
        </SidebarLink>
      </div>
    </aside>
  );
}
