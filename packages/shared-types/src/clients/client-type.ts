export const CLIENT_TYPES = [
  'individual',
  'business',
  'organization',
  'government',
  'nonprofit',
  'other',
] as const

export type ClientType =
  (typeof CLIENT_TYPES)[number]

export const CLIENT_TYPE_LABELS = {
  individual: 'Individual',
  business: 'Business',
  organization: 'Organization',
  government: 'Government',
  nonprofit: 'Nonprofit',
  other: 'Other',
} as const satisfies Record<ClientType, string>

export const DEFAULT_CLIENT_TYPE: ClientType = 'business'
