import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const productionStages = [
  { label: 'Content Planning', progress: 75 },
  { label: 'Creative Production', progress: 58 },
  { label: 'Client Approvals', progress: 36 },
]

export function ProductionOverview() {
  return (
    <Card className="gap-[12px] rounded-[6px] py-[12px] shadow-none">
      <CardHeader className="flex flex-row items-center justify-between gap-2 px-[12px]">
        <CardTitle className="text-[14px] font-medium">
          Production Overview
        </CardTitle>

        <span className="text-[11px] text-muted-foreground">
          This month
        </span>
      </CardHeader>

      <CardContent className="px-[12px]">
        <div className="flex flex-col gap-[14px] border-t border-border pt-[12px]">
          {productionStages.map(({ label, progress }) => (
            <div key={label} className="flex flex-col gap-[6px]">
              <div className="flex items-center justify-between text-[12px]">
                <span>{label}</span>

                <span className="font-medium tabular-nums">
                  {progress}%
                </span>
              </div>

              <div
                role="progressbar"
                aria-label={label}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                className="h-[5px] overflow-hidden rounded-full bg-muted"
              >
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
