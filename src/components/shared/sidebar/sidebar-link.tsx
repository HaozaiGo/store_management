'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type SidebarLinkProps = {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  collapsed?: boolean
}

export function SidebarLink({
  href,
  icon,
  children,
  collapsed
}: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-md p-3 text-sm font-medium transition-colors',
        isActive 
          ? 'bg-primary/10 text-primary' 
          : 'hover:bg-accent hover:text-accent-foreground',
        collapsed ? 'justify-center' : 'px-3'
      )}
    >
      <span>{icon}</span>
      {!collapsed && <span>{children}</span>}
    </Link>
  )
}