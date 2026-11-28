import type {
  AuditableEntity,
  ArchivableEntity,
} from '../common/entity.js'

import type { Money } from '../common/money.js'
import type { ServiceCategory } from './service-category.js'
import type { BillingCycle } from './billing-cycle.js'
import type {
  ServiceDeliverable,
} from './service-deliverable.js'

export interface Service
  extends AuditableEntity,
    ArchivableEntity {

  code: string
  name: string
  description: string | null

  category: ServiceCategory

  defaultPrice: Money | null
  defaultBillingCycle: BillingCycle

  deliverables: ServiceDeliverable[]

  isActive: boolean
  tags: string[]
}

export type ServiceSummary = Pick<
  Service,
  | 'id'
  | 'code'
  | 'name'
  | 'category'
  | 'defaultPrice'
  | 'defaultBillingCycle'
  | 'isActive'
>
