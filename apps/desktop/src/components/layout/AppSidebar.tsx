
import { useState } from 'react'

import {
  LayoutDashboard,
  Users,
  Palette,
  Bot,
  CalendarDays,
  Megaphone,
  ChartNoAxesCombined,
  CreditCard,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react'

import { IconButton } from '@/components/common/IconButton'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const navigation = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Clients', icon: Users },
  { label: 'Brand Studio', icon: Palette },
  { label: 'AI Agents', icon: Bot },
  { label: 'Content Calendar', icon: CalendarDays },
  { label: 'Campaigns', icon: Megaphone },
  { label: 'Analytics', icon: ChartNoAxesCombined },
  { label: 'Billing', icon: CreditCard },
  { label: 'Settings', icon: Settings },
]

interface AppSidebarProps {
  activePage: string
  onNavigate: (page: string) => void
}

export function AppSidebar({
  activePage,
  onNavigate,
}: AppSidebarProps) {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <aside
      className={`studio-sidebar ${
        collapsed ? 'is-collapsed' : ''
      }`}
    >
      <div className="studio-sidebar-header">
        {!collapsed && (
          <span className="studio-brand">
            Social Medea
          </span>
        )}

        <IconButton
          icon={collapsed ? PanelLeftOpen : PanelLeftClose}
          label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={() => setCollapsed(!collapsed)}
          className="studio-sidebar-toggle"
        />
      </div>

      <nav className="studio-navigation">
        {navigation.map(({ label, icon: Icon }) => (
          <Tooltip key={`${label}-${collapsed}`} disabled={!collapsed}>
            <TooltipTrigger
              render={
                <button
                  type="button"
                  aria-label={label}
                  aria-current={
                    activePage === label ? 'page' : undefined
                  }
                  className={`studio-nav-button ${
                    activePage === label ? 'is-active' : ''
                  }`}
                  onClick={() => onNavigate(label)}
                />
              }
            >
              <Icon size={18} strokeWidth={1.7} />

              {!collapsed && <span>{label}</span>}
            </TooltipTrigger>

            <TooltipContent side="right" sideOffset={8}>
  {label}
</TooltipContent>
          </Tooltip>
        ))}
      </nav>

      <div className="studio-sidebar-footer">
        <Tooltip key={`profile-${collapsed}`} disabled={!collapsed}>
          <TooltipTrigger
            render={
              <div
                className="studio-profile"
                tabIndex={0}
                aria-label="Agency Administrator"
              />
            }
          >
            <div className="studio-avatar">A</div>

            {!collapsed && (
              <div className="studio-profile-info">
                <strong>Agency Admin</strong>
                <span>Administrator</span>
              </div>
            )}
          </TooltipTrigger>

          <TooltipContent side="right" sideOffset={8}>
  Agency Administrator
</TooltipContent>
        </Tooltip>
      </div>
    </aside>
  )
}
