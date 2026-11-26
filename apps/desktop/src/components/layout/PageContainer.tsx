import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageContainerProps {
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

export function PageContainer({
  children,
  className,
  fullWidth = true,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        'flex w-full min-w-0 flex-col gap-4',
        !fullWidth && 'mx-auto max-w-[1200px]',
        className,
      )}
    >
      {children}
    </div>
  )
}
