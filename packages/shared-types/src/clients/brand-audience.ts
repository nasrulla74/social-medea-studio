import type {
  CountryCode,
  LanguageCode,
} from '../common/regional.js'

export interface BrandAudience {
  name: string
  description: string | null

  minimumAge: number | null
  maximumAge: number | null

  demographics: string[]
  interests: string[]
  painPoints: string[]
  goals: string[]

  countries: CountryCode[]
  languages: LanguageCode[]
  locations: string[]
}
