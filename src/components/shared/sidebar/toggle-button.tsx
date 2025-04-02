'use client'

import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ToggleButtonProps = {
  collapsed: boolean
  onToggle: () => void
}

export function ToggleButton({ collapsed, onToggle }: ToggleButtonProps) {
  return (
    <div className={cn(
      'flex w-full p-2 border-b',
      collapsed ? 'justify-center' : 'justify-end'
    )}>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onToggle}
        className="h-8 w-8 p-0"
      >
        {collapsed ? (
          <ChevronsRight className="h-4 w-4" />
        ) : (
          <ChevronsLeft className="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}