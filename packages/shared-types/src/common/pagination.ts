export type SortDirection = 'asc' | 'desc'

export interface PaginationParams {
  page?: number
  pageSize?: number
}

export interface SortParams<TField extends string = string> {
  sortBy?: TField
  sortDirection?: SortDirection
}

export interface SearchParams {
  search?: string
}

export interface PaginationMeta {
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface PaginatedResponse<T> {
  items: T[]
  meta: PaginationMeta
}

export const PAGINATION_DEFAULTS = {
  page: 1,
  pageSize: 25,
  maxPageSize: 100,
} as const
