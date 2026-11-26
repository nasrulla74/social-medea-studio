import {
  Users,
  CalendarDays,
  Clock3,
  Bot,
} from 'lucide-react'

import { PageContainer } from '@/components/layout/PageContainer'
import { PageHeader } from '@/components/layout/PageHeader'

import { StatCard } from '@/components/dashboard/StatCard'
import { ProductionOverview } from '@/components/dashboard/ProductionOverview'
import { AgentStatus } from '@/components/dashboard/AgentStatus'

export function DashboardPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        description="Manage your clients, content and AI workflows."
      />

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
    </PageContainer>
  )
}
