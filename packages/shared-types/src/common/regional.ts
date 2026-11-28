/** ISO 3166-1 alpha-2 country code. */
export type CountryCode = string

/** ISO 4217 currency code. */
export type CurrencyCode = string

/** IANA timezone identifier. */
export type TimeZone = string

/** BCP 47 language tag. */
export type LanguageCode = string

export interface RegionalPreferences {
  currencyCode: CurrencyCode
  timezone: TimeZone
  languageCode: LanguageCode
}
