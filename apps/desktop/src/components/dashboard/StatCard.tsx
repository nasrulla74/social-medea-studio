import type { LucideIcon } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface StatCardProps {
  title: string
  value: string | number
  description: string
  icon: LucideIcon
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <Card className="min-h-[100px] gap-[6px] rounded-[6px] py-[12px] shadow-none">
      <CardHeader className="flex flex-row items-center justify-between gap-2 px-[12px]">
        <CardTitle className="text-[12px] font-medium text-muted-foreground">
          {title}
        </CardTitle>

        <Icon
          size={16}
          strokeWidth={1.7}
          className="shrink-0 text-muted-foreground"
          aria-hidden="true"
        />
      </CardHeader>

      <CardContent className="px-[12px]">
        <div className="text-[24px] font-semibold leading-tight tracking-tight tabular-nums">
          {value}
        </div>

        <p className="mt-1 text-[11px] text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
