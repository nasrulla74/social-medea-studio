export const CLIENT_SERVICE_STATUSES = [
  'draft',
  'pending',
  'active',
  'paused',
  'completed',
  'cancelled',
  'expired',
] as const

export type ClientServiceStatus =
  (typeof CLIENT_SERVICE_STATUSES)[number]

export const CLIENT_SERVICE_STATUS_LABELS = {
  draft: 'Draft',
  pending: 'Pending',
  active: 'Active',
  paused: 'Paused',
  completed: 'Completed',
  cancelled: 'Cancelled',
  expired: 'Expired',
} as const satisfies Record<ClientServiceStatus, string>

export const DEFAULT_CLIENT_SERVICE_STATUS:
  ClientServiceStatus = 'draft'
