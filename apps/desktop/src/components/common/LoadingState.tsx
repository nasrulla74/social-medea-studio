import { LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingStateProps {
  title?: string
  description?: string
  compact?: boolean
  className?: string
}

export function LoadingState({
  title = 'Loading...',
  description,
  compact = false,
  className,
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'flex flex-col items-center justify-center',
        'gap-3 text-center',
        compact
          ? 'min-h-[80px] p-3'
          : 'min-h-[240px] rounded-md border border-border bg-card p-6',
        className,
      )}
    >
      <LoaderCircle
        className={cn(
          'animate-spin text-muted-foreground',
          'motion-reduce:animate-none',
          compact ? 'size-5' : 'size-8',
        )}
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <div className="space-y-1">
        <p className="text-[13px] font-medium">
          {title}
        </p>

        {description && (
          <p className="max-w-[320px] text-[12px] text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
