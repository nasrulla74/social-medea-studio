import type {
  ISODateTime,
} from '../common/identifiers.js'

export interface SocialAccountStats {
  followerCount: number | null
  followingCount: number | null
  subscriberCount: number | null
  postCount: number | null

  lastSyncedAt: ISODateTime
}
