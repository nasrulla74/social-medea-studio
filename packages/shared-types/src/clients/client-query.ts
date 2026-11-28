import type {
  PaginationParams,
  SortParams,
  SearchParams,
} from '../common/pagination.js'

import type {
  UserId,
} from '../common/identifiers.js'

import type {
  CountryCode,
} from '../common/regional.js'

import type { ClientStatus } from './client-status.js'
import type { ClientType } from './client-type.js'
import type { ClientIndustry } from './client-industry.js'

export const CLIENT_SORT_FIELDS = [
  'name',
  'code',
  'status',
  'createdAt',
  'updatedAt',
] as const

export type ClientSortField =
  (typeof CLIENT_SORT_FIELDS)[number]

export interface ClientFilters {
  statuses?: ClientStatus[]
  types?: ClientType[]
  industries?: ClientIndustry[]

  accountManagerId?: UserId
  countryCode?: CountryCode

  tags?: string[]

  includeArchived?: boolean
}

export interface ClientListQuery
  extends PaginationParams,
    SortParams<ClientSortField>,
    SearchParams,
    ClientFilters {}

export const DEFAULT_CLIENT_LIST_QUERY = {
  page: 1,
  pageSize: 25,
  sortBy: 'name',
  sortDirection: 'asc',
  includeArchived: false,
} as const satisfies ClientListQuery
