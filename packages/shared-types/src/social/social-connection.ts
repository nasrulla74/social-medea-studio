import type {
  ISODateTime,
} from '../common/identifiers.js'

import type {
  SocialProvider,
} from './social-provider.js'

import type {
  SocialConnectionStatus,
} from './social-connection-status.js'

export interface SocialConnection {
  provider: SocialProvider
  status: SocialConnectionStatus

  connectedAt: ISODateTime | null
  disconnectedAt: ISODateTime | null

  authorizationExpiresAt: ISODateTime | null

  lastVerifiedAt: ISODateTime | null
  lastSuccessfulSyncAt: ISODateTime | null

  requiresReauthorization: boolean

  lastErrorCode: string | null
}
