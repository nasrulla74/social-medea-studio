export const BRAND_STATUSES = [
  'draft',
  'active',
  'inactive',
  'archived',
] as const

export type BrandStatus =
  (typeof BRAND_STATUSES)[number]

export const BRAND_STATUS_LABELS = {
  draft: 'Draft',
  active: 'Active',
  inactive: 'Inactive',
  archived: 'Archived',
} as const satisfies Record<BrandStatus, string>

export const DEFAULT_BRAND_STATUS: BrandStatus = 'draft'
