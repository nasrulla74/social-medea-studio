import type {
  ApiResponse,
} from '../common/api-response.js'

import type {
  PaginatedResponse,
} from '../common/pagination.js'

import type { Client } from './client.js'

import type {
  ClientDirectoryItem,
} from './client-summary.js'

import type {
  ClientStatistics,
} from './client-statistics.js'

import type {
  ClientOverview,
} from './client-overview.js'

export type ClientListResponse =
  ApiResponse<PaginatedResponse<ClientDirectoryItem>>

export type ClientDetailResponse =
  ApiResponse<Client>

export type CreateClientResponse =
  ApiResponse<Client>

export type UpdateClientResponse =
  ApiResponse<Client>

export type UpdateClientStatusResponse =
  ApiResponse<Client>

export type ArchiveClientResponse =
  ApiResponse<Client>

export type RestoreClientResponse =
  ApiResponse<Client>

export type ClientStatisticsResponse =
  ApiResponse<ClientStatistics>

export type ClientOverviewResponse =
  ApiResponse<ClientOverview>
