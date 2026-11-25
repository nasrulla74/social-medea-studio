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
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

interface NavigationItem {
  id: string
  label: string
  icon: LucideIcon
  description: string
}

export const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    description: 'Workspace overview and activity',
  },
  {
    id: 'clients',
    label: 'Clients',
    icon: Users,
    description: 'Manage clients and relationships',
  },
  {
    id: 'brand-studio',
    label: 'Brand Studio',
    icon: Palette,
    description: 'Manage brand identities and assets',
  },
  {
    id: 'ai-agents',
    label: 'AI Agents',
    icon: Bot,
    description: 'Configure and manage AI agents',
  },
  {
    id: 'content-calendar',
    label: 'Content Calendar',
    icon: CalendarDays,
    description: 'Plan and schedule social media content',
  },
  {
    id: 'campaigns',
    label: 'Campaigns',
    icon: Megaphone,
    description: 'Manage marketing campaigns',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: ChartNoAxesCombined,
    description: 'Monitor performance and reports',
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: CreditCard,
    description: 'Manage invoices and billing',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    description: 'Manage application preferences',
  },
] as const satisfies readonly NavigationItem[]

export type NavigationId =
  (typeof navigationItems)[number]['id']

export type NavigationLabel =
  (typeof navigationItems)[number]['label']

export const DEFAULT_NAVIGATION_ID: NavigationId =
  'dashboard'
