import type {
  LanguageCode,
} from '../common/regional.js'

export interface BrandContentGuidelines {
  contentPillars: string[]

  preferredTopics: string[]
  prohibitedTopics: string[]

  keywords: string[]
  hashtags: string[]

  contentLanguages: LanguageCode[]

  callToActionExamples: string[]

  additionalInstructions: string | null
}
