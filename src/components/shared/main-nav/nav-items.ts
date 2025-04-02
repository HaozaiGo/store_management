import { type NavItem } from "./types"

export const navConfig: NavItem[] = [
  {
    title: "仪表盘",
    href: "/dashboard",
    icon: "dashboard",
    roles: ["ADMIN", "EDITOR", "VIEWER"]
  },
  {
    title: "商品管理",
    href: "/products",
    icon: "package",
    roles: ["ADMIN", "EDITOR"]
  },
  {
    title: "订单管理",
    href: "/orders",
    icon: "shoppingCart",
    roles: ["ADMIN", "EDITOR"]
  },
  {
    title: "客户管理",
    href: "/customers",
    icon: "users",
    roles: ["ADMIN"]
  },
  {
    title: "系统设置",
    href: "/settings",
    icon: "settings",
    roles: ["ADMIN"]
  }
]

// 根据用户角色过滤导航项
export function getFilteredNavItems(role?: string) {
  return navConfig.filter(item => 
    !item.roles || (role && item.roles.includes(role))
  )
}