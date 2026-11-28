import {
  CLIENT_STATUSES,
  CLIENT_STATUS_LABELS,
  CLIENT_TYPES,
  CLIENT_TYPE_LABELS,
  CLIENT_INDUSTRIES,
  CLIENT_INDUSTRY_LABELS,
  CLIENT_SORT_FIELDS,
  DEFAULT_CLIENT_LIST_QUERY,
} from '@social-medea/shared-types'

import type {
  ClientStatus,
  ClientType,
  ClientIndustry,
  ClientListQuery,
} from '@social-medea/shared-types'

export interface SelectOption<T extends string> {
  value: T
  label: string
}

export const CLIENT_STATUS_OPTIONS:
  SelectOption<ClientStatus>[] =
    CLIENT_STATUSES.map((value) => ({
      value,
      label: CLIENT_STATUS_LABELS[value],
    }))

export const CLIENT_TYPE_OPTIONS:
  SelectOption<ClientType>[] =
    CLIENT_TYPES.map((value) => ({
      value,
      label: CLIENT_TYPE_LABELS[value],
    }))

export const CLIENT_INDUSTRY_OPTIONS:
  SelectOption<ClientIndustry>[] =
    CLIENT_INDUSTRIES.map((value) => ({
      value,
      label: CLIENT_INDUSTRY_LABELS[value],
    }))

export const CLIENT_SORT_OPTIONS = CLIENT_SORT_FIELDS

export function createDefaultClientListQuery():
  ClientListQuery {
  return {
    ...DEFAULT_CLIENT_LIST_QUERY,
  }
}
