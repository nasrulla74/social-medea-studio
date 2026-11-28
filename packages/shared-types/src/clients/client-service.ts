import type {
  AuditableEntity,
  ArchivableEntity,
} from '../common/entity.js'

import type {
  EntityId,
  ISODate,
  UserId,
} from '../common/identifiers.js'

import type { Money } from '../common/money.js'
import type {
  ServiceCategory,
} from '../services/service-category.js'

import type {
  BillingCycle,
} from '../services/billing-cycle.js'

import type {
  ClientServiceStatus,
} from '../services/service-status.js'

import type {
  ServiceDeliverable,
} from '../services/service-deliverable.js'

export interface ClientService
  extends AuditableEntity,
    ArchivableEntity {

  // Relationships
  clientId: EntityId
  brandId: EntityId | null
  serviceId: EntityId
  subscriptionId: EntityId | null

  // Agreed service details
  name: string
  description: string | null
  category: ServiceCategory

  status: ClientServiceStatus

  // Commercial terms
  price: Money
  billingCycle: BillingCycle

  // Agreement period
  startDate: ISODate | null
  endDate: ISODate | null
  autoRenew: boolean

  // Service commitments
  deliverables: ServiceDeliverable[]

  // Management
  assignedTo: UserId | null
  notes: string | null
}

export type ClientServiceSummary = Pick<
  ClientService,
  | 'id'
  | 'clientId'
  | 'brandId'
  | 'serviceId'
  | 'subscriptionId'
  | 'name'
  | 'category'
  | 'status'
  | 'price'
  | 'billingCycle'
  | 'startDate'
  | 'endDate'
>
