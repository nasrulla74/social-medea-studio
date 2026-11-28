import type { Client } from './client.js'

import type {
  ClientContactSummary,
} from './client-contact.js'

import type {
  BrandDirectoryItem,
} from './brand.js'

import type {
  ClientServiceSummary,
} from './client-service.js'

import type {
  SocialAccountSummary,
} from '../social/social-account.js'

export interface ClientOverviewCounts {
  contacts: number
  brands: number
  socialAccounts: number
  activeServices: number
  activeSubscriptions: number
}

export interface ClientOverview {
  client: Client

  counts: ClientOverviewCounts

  primaryContact: ClientContactSummary | null
  primaryBrand: BrandDirectoryItem | null

  recentBrands: BrandDirectoryItem[]
  recentSocialAccounts: SocialAccountSummary[]
  activeServices: ClientServiceSummary[]
}
