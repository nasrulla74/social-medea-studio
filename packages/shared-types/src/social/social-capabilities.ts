export const SOCIAL_CONTENT_TYPES = [
  'text',
  'image',
  'video',
  'carousel',
  'story',
  'reel',
  'short',
  'link',
  'poll',
  'document',
  'live',
] as const

export type SocialContentType =
  (typeof SOCIAL_CONTENT_TYPES)[number]

export interface SocialAccountCapabilities {
  canPublish: boolean
  canSchedule: boolean
  canDeletePosts: boolean
  canEditPosts: boolean

  canReadAnalytics: boolean
  canReadComments: boolean
  canReplyToComments: boolean

  canReadMessages: boolean
  canSendMessages: boolean

  canManageAds: boolean

  supportedContentTypes: SocialContentType[]
}

export function createDefaultSocialCapabilities():
  SocialAccountCapabilities {
  return {
    canPublish: false,
    canSchedule: false,
    canDeletePosts: false,
    canEditPosts: false,

    canReadAnalytics: false,
    canReadComments: false,
    canReplyToComments: false,

    canReadMessages: false,
    canSendMessages: false,

    canManageAds: false,

    supportedContentTypes: [],
  }
}
