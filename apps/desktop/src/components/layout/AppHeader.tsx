import {
  ChevronRight,
  Layers,
  Moon,
  Sun,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { IconButton } from '@/components/common/IconButton'

interface AppHeaderProps {
  activePage: string
  resolvedTheme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function AppHeader({
  activePage,
  resolvedTheme,
  onToggleTheme,
}: AppHeaderProps) {
  const isDark = resolvedTheme === 'dark'

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

        <IconButton
          icon={isDark ? Sun : Moon}
          label={
            isDark
              ? 'Switch to light mode'
              : 'Switch to dark mode'
          }
          onClick={onToggleTheme}
        />

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
