import type {
  AuditableEntity,
  ArchivableEntity,
} from '../common/entity.js'

import type {
  EntityId,
} from '../common/identifiers.js'

import type {
  TimeZone,
} from '../common/regional.js'

import type {
  SocialPlatform,
} from './social-platform.js'

import type {
  SocialAccountType,
} from './social-account-type.js'

import type {
  SocialConnection,
} from './social-connection.js'

import type {
  SocialAccountCapabilities,
} from './social-capabilities.js'

import type {
  SocialAccountStats,
} from './social-account-stats.js'

export interface SocialAccount
  extends AuditableEntity,
    ArchivableEntity {

  // Relationships
  clientId: EntityId
  brandId: EntityId

  // Platform identity
  platform: SocialPlatform
  accountType: SocialAccountType

  platformAccountId: string | null

  // Account profile
  displayName: string
  username: string | null
  profileUrl: string | null
  avatarUrl: string | null

  // Connection metadata
  connection: SocialConnection

  // Verified account capabilities
  capabilities: SocialAccountCapabilities

  // Latest statistics
  stats: SocialAccountStats | null

  // Publishing preferences
  timezone: TimeZone | null
  publishingEnabled: boolean
  requiresApproval: boolean

  // Management
  isActive: boolean
  tags: string[]
  notes: string | null
}

export type SocialAccountSummary = Pick<
  SocialAccount,
  | 'id'
  | 'workspaceId'
  | 'clientId'
  | 'brandId'
  | 'platform'
  | 'accountType'
  | 'displayName'
  | 'username'
  | 'profileUrl'
  | 'avatarUrl'
  | 'publishingEnabled'
  | 'requiresApproval'
  | 'isActive'
  | 'updatedAt'
> & {
  connectionStatus: SocialConnection['status']
  provider: SocialConnection['provider']
  followerCount: number | null
  subscriberCount: number | null
}
