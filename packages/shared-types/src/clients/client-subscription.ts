import type {
  AuditableEntity,
  ArchivableEntity,
} from '../common/entity.js'

import type {
  EntityId,
  ISODate,
} from '../common/identifiers.js'

import type { Money } from '../common/money.js'
import type {
  BillingCycle,
} from '../services/billing-cycle.js'

import type {
  ClientServiceStatus,
} from '../services/service-status.js'

export interface ClientSubscription
  extends AuditableEntity,
    ArchivableEntity {

  clientId: EntityId
  packageId: EntityId

  name: string
  description: string | null

  status: ClientServiceStatus

  price: Money
  billingCycle: Exclude<BillingCycle, 'one_time'>

  startDate: ISODate | null
  endDate: ISODate | null

  currentPeriodStart: ISODate | null
  currentPeriodEnd: ISODate | null

  nextBillingDate: ISODate | null

  autoRenew: boolean
  cancelledAt: ISODate | null

  notes: string | null
}
