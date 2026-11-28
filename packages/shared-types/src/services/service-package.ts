import type {
  AuditableEntity,
  ArchivableEntity,
} from '../common/entity.js'

import type { EntityId } from '../common/identifiers.js'
import type { Money } from '../common/money.js'
import type { BillingCycle } from './billing-cycle.js'
import type {
  ServiceDeliverable,
} from './service-deliverable.js'

export interface ServicePackageItem {
  serviceId: EntityId
  quantity: number
  deliverables: ServiceDeliverable[]
}

export interface ServicePackage
  extends AuditableEntity,
    ArchivableEntity {

  code: string
  name: string
  description: string | null

  items: ServicePackageItem[]

  price: Money
  billingCycle: BillingCycle

  isActive: boolean
  tags: string[]
}
