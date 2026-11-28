import type { ClientStatus } from './client-status.js'
import type { ClientType } from './client-type.js'
import type { ClientIndustry } from './client-industry.js'

export interface ClientStatistics {
  totalClients: number

  byStatus: Record<ClientStatus, number>
  byType: Record<ClientType, number>
  byIndustry: Record<ClientIndustry, number>

  unclassifiedIndustryCount: number

  totalBrands: number
  totalContacts: number
  totalSocialAccounts: number
  totalActiveServices: number
}
