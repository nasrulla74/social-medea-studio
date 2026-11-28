export const SOCIAL_CONNECTION_STATUSES = [
  'not_connected',
  'pending',
  'connected',
  'expired',
  'revoked',
  'error',
  'disconnected',
] as const

export type SocialConnectionStatus =
  (typeof SOCIAL_CONNECTION_STATUSES)[number]

export const SOCIAL_CONNECTION_STATUS_LABELS = {
  not_connected: 'Not Connected',
  pending: 'Pending',
  connected: 'Connected',
  expired: 'Expired',
  revoked: 'Revoked',
  error: 'Error',
  disconnected: 'Disconnected',
} as const satisfies Record<SocialConnectionStatus, string>

export const DEFAULT_SOCIAL_CONNECTION_STATUS:
  SocialConnectionStatus = 'not_connected'
