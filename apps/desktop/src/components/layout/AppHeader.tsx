
import { ChevronRight, Layers } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface AppHeaderProps {
  activePage: string
}

export function AppHeader({ activePage }: AppHeaderProps) {
  return (
    <header className="studio-header">
      <div className="studio-breadcrumb">
        <Layers size={15} strokeWidth={1.7} />

        <span>Workspace</span>

        <ChevronRight size={13} strokeWidth={1.7} />

        <span className="studio-breadcrumb-active">
          {activePage}
        </span>
      </div>

      <div className="studio-header-actions">
        <Badge
          variant="secondary"
          className="rounded-sm px-2 py-0.5 text-[10px] font-normal"
        >
          Development
        </Badge>

        <div className="studio-header-divider" />

        <div
          className="studio-header-avatar"
          title="Agency Administrator"
        >
          A
        </div>
      </div>
    </header>
  )
}
