import type { CountryCode } from './regional.js'

export interface Address {
  addressLine1: string | null
  addressLine2: string | null
  city: string | null
  state: string | null
  postalCode: string | null
  countryCode: CountryCode | null
}
