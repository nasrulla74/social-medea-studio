import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Inbox } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex min-h-[240px] flex-col items-center',
        'justify-center gap-3 rounded-md',
        'border border-dashed border-border',
        'bg-card p-6 text-center',
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
        <Icon
          className="size-6 text-muted-foreground"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-[14px] font-semibold">
          {title}
        </h3>

        {description && (
          <p className="max-w-[320px] text-[12px] text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="mt-1 flex flex-wrap items-center justify-center gap-2">
          {action}
        </div>
      )}
    </div>
  )
}
