export const DELIVERABLE_TYPES = [
  'social_post',
  'story',
  'reel',
  'video',
  'graphic',
  'carousel',
  'article',
  'advertisement',
  'campaign',
  'report',
  'consultation',
  'other',
] as const

export type DeliverableType =
  (typeof DELIVERABLE_TYPES)[number]

export type DeliverablePeriod =
  | 'one_time'
  | 'weekly'
  | 'monthly'
  | 'quarterly'
  | 'annually'

export interface ServiceDeliverable {
  name: string
  type: DeliverableType
  description: string | null
  quantity: number
  period: DeliverablePeriod
}
