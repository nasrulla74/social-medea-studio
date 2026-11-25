
import {
  Users,
  CalendarDays,
  Clock3,
  Bot,
} from 'lucide-react'

import { StatCard } from '@/components/dashboard/StatCard'
import { ProductionOverview } from '@/components/dashboard/ProductionOverview'
import { AgentStatus } from '@/components/dashboard/AgentStatus'

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-[12px]">
      {/* Page heading */}
      <div>
        <h1 className="text-[20px] font-semibold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-1 text-[12px] text-muted-foreground">
          Manage your clients, content and AI workflows.
        </p>
      </div>

      {/* Dashboard statistics */}
      <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Active Clients"
          value={12}
          description="Demo data"
          icon={Users}
        />

        <StatCard
          title="Scheduled Posts"
          value={86}
          description="Demo data"
          icon={CalendarDays}
        />

        <StatCard
          title="Pending Approvals"
          value={24}
          description="Demo data"
          icon={Clock3}
        />

        <StatCard
          title="AI Agents"
          value={4}
          description="Demo data"
          icon={Bot}
        />
      </div>

      {/* Dashboard panels */}
      <div className="grid grid-cols-1 gap-[12px] xl:grid-cols-[1.3fr_1fr]">
        <ProductionOverview />
        <AgentStatus />
      </div>
    </div>
  )
}
