export const BILLING_CYCLES = [
  'one_time',
  'weekly',
  'monthly',
  'quarterly',
  'semi_annually',
  'annually',
] as const

export type BillingCycle =
  (typeof BILLING_CYCLES)[number]

export const BILLING_CYCLE_LABELS = {
  one_time: 'One-time',
  weekly: 'Weekly',
  monthly: 'Monthly',
  quarterly: 'Quarterly',
  semi_annually: 'Semi-annually',
  annually: 'Annually',
} as const satisfies Record<BillingCycle, string>

export const DEFAULT_BILLING_CYCLE: BillingCycle = 'monthly'
