import { CircleAlert, RefreshCw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ErrorStateProps {
  icon?: LucideIcon
  title?: string
  description?: string
  onRetry?: () => void
  retryLabel?: string
  compact?: boolean
  className?: string
}

export function ErrorState({
  icon: Icon = CircleAlert,
  title = 'Something went wrong',
  description = 'Please try again later.',
  onRetry,
  retryLabel = 'Try Again',
  compact = false,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        'gap-3 text-center',
        compact
          ? 'min-h-[100px] p-3'
          : 'min-h-[240px] rounded-md border border-border bg-card p-6',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-lg',
          'bg-destructive/10',
          compact ? 'size-9' : 'size-12',
        )}
      >
        <Icon
          className={cn(
            'text-destructive',
            compact ? 'size-5' : 'size-6',
          )}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <div role="alert" className="space-y-1">
        <p className="text-[14px] font-semibold">
          {title}
        </p>

        <p className="max-w-[320px] text-[12px] text-muted-foreground">
          {description}
        </p>
      </div>

      {onRetry && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="mt-1"
        >
          <RefreshCw size={14} aria-hidden="true" />
          {retryLabel}
        </Button>
      )}
    </div>
  )
}
