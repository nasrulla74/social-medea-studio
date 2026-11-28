import type { CurrencyCode } from './regional.js'

/**
 * Decimal monetary amount serialized as a string.
 * Example: "5000.00"
 */
export type DecimalAmount = string

export interface Money {
  amount: DecimalAmount
  currencyCode: CurrencyCode
}
