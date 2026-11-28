import type {
  AuditableEntity,
  ArchivableEntity,
} from '../common/entity.js'

import type { EntityId } from '../common/identifiers.js'
import type { ClientIndustry } from './client-industry.js'
import type { BrandStatus } from './brand-status.js'
import type { BrandVisualIdentity } from './brand-identity.js'
import type { BrandVoice } from './brand-voice.js'
import type { BrandAudience } from './brand-audience.js'
import type {
  BrandContentGuidelines,
} from './brand-content-guidelines.js'

export interface Brand
  extends AuditableEntity,
    ArchivableEntity {

  // Relationship
  clientId: EntityId

  // Identity
  code: string
  name: string
  tagline: string | null
  description: string | null

  // Classification
  industry: ClientIndustry | null
  status: BrandStatus

  // Digital presence
  website: string | null

  // Brand strategy
  mission: string | null
  vision: string | null
  values: string[]

  // Brand guidelines
  visualIdentity: BrandVisualIdentity | null
  voice: BrandVoice | null
  audiences: BrandAudience[]
  contentGuidelines: BrandContentGuidelines | null

  // Management
  isPrimary: boolean
  tags: string[]
}

export type BrandSummary = Pick<
  Brand,
  | 'id'
  | 'workspaceId'
  | 'clientId'
  | 'code'
  | 'name'
  | 'tagline'
  | 'industry'
  | 'status'
  | 'website'
  | 'isPrimary'
  | 'updatedAt'
> & {
  logoUrl: string | null
}

export interface BrandDirectoryItem extends BrandSummary {
  socialAccountCount: number
}
