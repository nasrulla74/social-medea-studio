import type { LucideIcon } from 'lucide-react'

import { PageContainer } from '@/components/layout/PageContainer'
import { PageHeader } from '@/components/layout/PageHeader'
import { EmptyState } from '@/components/common/EmptyState'

interface ModulePlaceholderProps {
  title: string
  description: string
  icon: LucideIcon
}

export function ModulePlaceholder({
  title,
  description,
  icon,
}: ModulePlaceholderProps) {
  return (
    <PageContainer>
      <PageHeader
        title={title}
        description={description}
      />

      <EmptyState
        icon={icon}
        title={`${title} module`}
        description="This module will be implemented in an upcoming development phase."
      />
    </PageContainer>
  )
}
