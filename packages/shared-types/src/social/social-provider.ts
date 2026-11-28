export const SOCIAL_PROVIDERS = [
  'direct_api',
  'postiz',
  'custom',
  'manual',
] as const

export type SocialProvider =
  (typeof SOCIAL_PROVIDERS)[number]

export const SOCIAL_PROVIDER_LABELS = {
  direct_api: 'Direct Platform API',
  postiz: 'Postiz',
  custom: 'Custom Integration',
  manual: 'Manual Management',
} as const satisfies Record<SocialProvider, string>

export const DEFAULT_SOCIAL_PROVIDER:
  SocialProvider = 'manual'
