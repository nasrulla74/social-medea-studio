import {
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react'

import { IconButton } from '@/components/common/IconButton'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { navigationItems } from '@/config/navigation'
import type { NavigationId } from '@/config/navigation'

interface AppSidebarProps {
  activePage: NavigationId
  onNavigate: (page: NavigationId) => void
}

export function AppSidebar({
  activePage,
  onNavigate,
}: AppSidebarProps) {
  const [collapsed, setCollapsed] = useLocalStorage<boolean>(
    'social-medea-sidebar-collapsed',
    true
  )

  return (
    <aside
      className={`studio-sidebar ${
        collapsed ? 'is-collapsed' : ''
      }`}
    >
      <div className="studio-sidebar-header">
        {!collapsed && (
          <span className="studio-sidebar-brand">
            Social Medea
          </span>
        )}

        <IconButton
          icon={collapsed ? PanelLeftOpen : PanelLeftClose}
          label={
            collapsed
              ? 'Expand sidebar'
              : 'Collapse sidebar'
          }
          onClick={() => setCollapsed(!collapsed)}
          className="text-zinc-300 hover:bg-white/10 hover:text-white"
        />
      </div>

      <nav
        className="studio-sidebar-nav"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => {
          const Icon = item.icon
          const selected = activePage === item.id

          return (
            <Tooltip
              key={`${item.id}-${collapsed}`}
              disabled={!collapsed}
            >
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    aria-label={item.label}
                    aria-current={
                      selected ? 'page' : undefined
                    }
                    className={`studio-nav-button ${
                      selected ? 'is-active' : ''
                    }`}
                    onClick={() => onNavigate(item.id)}
                  />
                }
              >
                <Icon size={18} strokeWidth={1.7} />

                {!collapsed && (
                  <span>{item.label}</span>
                )}
              </TooltipTrigger>

              <TooltipContent
                side="right"
                sideOffset={8}
              >
                {item.label}
              </TooltipContent>
            </Tooltip>
          )
        })}
      </nav>

      <div className="studio-sidebar-footer">
        <Tooltip
          key={`profile-${collapsed}`}
          disabled={!collapsed}
        >
          <TooltipTrigger
            render={
              <div
                className="studio-sidebar-profile"
                tabIndex={0}
              />
            }
          >
            <div className="studio-sidebar-avatar">
              A
            </div>

            {!collapsed && (
              <div className="studio-sidebar-profile-text">
                <div className="studio-sidebar-profile-name">
                  Agency Admin
                </div>
                <div className="studio-sidebar-profile-role">
                  Administrator
                </div>
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
