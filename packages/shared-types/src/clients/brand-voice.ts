export const BRAND_TONES = [
  'professional',
  'friendly',
  'casual',
  'formal',
  'luxurious',
  'playful',
  'inspirational',
  'educational',
  'authoritative',
  'empathetic',
  'bold',
  'minimal',
  'other',
] as const

export type BrandTone =
  (typeof BRAND_TONES)[number]

export const BRAND_TONE_LABELS = {
  professional: 'Professional',
  friendly: 'Friendly',
  casual: 'Casual',
  formal: 'Formal',
  luxurious: 'Luxurious',
  playful: 'Playful',
  inspirational: 'Inspirational',
  educational: 'Educational',
  authoritative: 'Authoritative',
  empathetic: 'Empathetic',
  bold: 'Bold',
  minimal: 'Minimal',
  other: 'Other',
} as const satisfies Record<BrandTone, string>

export interface BrandVoice {
  tones: BrandTone[]
  personality: string[]
  writingStyle: string | null
  guidelines: string | null

  preferredWords: string[]
  prohibitedWords: string[]

  exampleMessages: string[]
}
