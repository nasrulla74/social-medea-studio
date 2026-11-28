export const CLIENT_STATUSES = [
  'lead',
  'onboarding',
  'active',
  'on_hold',
  'inactive',
  'archived',
] as const

export type ClientStatus =
  (typeof CLIENT_STATUSES)[number]

export const CLIENT_STATUS_LABELS = {
  lead: 'Lead',
  onboarding: 'Onboarding',
  active: 'Active',
  on_hold: 'On Hold',
  inactive: 'Inactive',
  archived: 'Archived',
} as const satisfies Record<ClientStatus, string>

export const DEFAULT_CLIENT_STATUS: ClientStatus = 'lead'
