import type {
  AuditableEntity,
  ArchivableEntity,
} from '../common/entity.js'

import type {
  UserId,
  ISODate,
} from '../common/identifiers.js'

import type { Address } from '../common/address.js'
import type { RegionalPreferences } from '../common/regional.js'

import type { ClientStatus } from './client-status.js'
import type { ClientType } from './client-type.js'
import type { ClientIndustry } from './client-industry.js'

export interface Client
  extends AuditableEntity,
    ArchivableEntity,
    RegionalPreferences {

  // Identity
  code: string
  name: string
  legalName: string | null
  logoUrl: string | null

  // Classification
  type: ClientType
  industry: ClientIndustry | null
  status: ClientStatus

  // Business information
  registrationNumber: string | null
  taxNumber: string | null
  description: string | null

  // Communication
  email: string | null
  phone: string | null
  website: string | null

  // Address
  address: Address | null

  // Management
  accountManagerId: UserId | null
  onboardingDate: ISODate | null
  tags: string[]
}
