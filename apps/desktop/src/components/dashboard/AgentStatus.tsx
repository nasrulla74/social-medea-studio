import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Badge } from '@/components/ui/badge'

const agents = [
  { name: 'Content Strategist', status: 'Idle' },
  { name: 'Copywriter', status: 'Idle' },
  { name: 'Creative Designer', status: 'Idle' },
  { name: 'Publishing Agent', status: 'Idle' },
]

export function AgentStatus() {
  return (
    <Card className="gap-[12px] rounded-[6px] py-[12px] shadow-none">
      <CardHeader className="flex flex-row items-center justify-between gap-2 px-[12px]">
        <CardTitle className="text-[14px] font-medium">
          AI Agent Status
        </CardTitle>

        <span className="text-[11px] text-muted-foreground">
          Demo
        </span>
      </CardHeader>

      <CardContent className="px-[12px]">
        <div className="divide-y divide-border border-t border-border">
          {agents.map(({ name, status }) => (
            <div
              key={name}
              className="flex min-h-[34px] items-center justify-between gap-2"
            >
              <div className="flex items-center gap-[8px]">
                <span
                  className="size-[7px] shrink-0 rounded-full bg-muted-foreground/60"
                  aria-hidden="true"
                />

                <span className="text-[12px]">
                  {name}
                </span>
              </div>

              <Badge
                variant="secondary"
                className="rounded-[4px] px-[6px] py-[2px] text-[10px] font-normal"
              >
                {status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
