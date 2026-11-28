export const SOCIAL_ACCOUNT_TYPES = [
  'personal',
  'business',
  'creator',
  'organization',
  'page',
  'channel',
  'group',
  'community',
  'bot',
  'other',
] as const

export type SocialAccountType =
  (typeof SOCIAL_ACCOUNT_TYPES)[number]

export const SOCIAL_ACCOUNT_TYPE_LABELS = {
  personal: 'Personal',
  business: 'Business',
  creator: 'Creator',
  organization: 'Organization',
  page: 'Page',
  channel: 'Channel',
  group: 'Group',
  community: 'Community',
  bot: 'Bot',
  other: 'Other',
} as const satisfies Record<SocialAccountType, string>
