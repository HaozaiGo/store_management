export interface NavItem {
    title: string
    href: string
    icon?: string
    roles?: string[] // 可访问的角色
    children?: NavItem[]
  }
  
  export interface User {
    name?: string | null
    email?: string | null
    image?: string | null
    role?: string
  }