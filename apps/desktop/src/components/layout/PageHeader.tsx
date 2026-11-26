import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
  title: string
  description?: string
  actions?: ReactNode
  className?: string
}

export function PageHeader({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        'flex min-w-0 flex-wrap items-center justify-between gap-3',
        className,
      )}
    >
      <div className="min-w-0 flex-1">
        <h1 className="text-[20px] font-semibold leading-tight tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-[12px] text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {actions && (
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {actions}
        </div>
      )}
    </header>
  )
}
