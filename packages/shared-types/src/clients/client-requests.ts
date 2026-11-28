import type { Client } from './client.js'
import type { ClientStatus } from './client-status.js'

export interface CreateClientRequest {
  // Required identity
  name: Client['name']

  // Classification
  type?: Client['type']
  industry?: Client['industry']

  // Business information
  legalName?: Client['legalName']
  registrationNumber?: Client['registrationNumber']
  taxNumber?: Client['taxNumber']
  description?: Client['description']

  // Branding
  logoUrl?: Client['logoUrl']

  // Communication
  email?: Client['email']
  phone?: Client['phone']
  website?: Client['website']

  // Address
  address?: Client['address']

  // Regional preferences
  currencyCode?: Client['currencyCode']
  timezone?: Client['timezone']
  languageCode?: Client['languageCode']

  // Management
  accountManagerId?: Client['accountManagerId']
  onboardingDate?: Client['onboardingDate']
  tags?: Client['tags']
}

export type UpdateClientRequest =
  Partial<CreateClientRequest>

export interface UpdateClientStatusRequest {
  status: Exclude<ClientStatus, 'archived'>
  reason?: string
}

export interface ArchiveClientRequest {
  reason?: string
}

export interface RestoreClientRequest {
  status: Exclude<ClientStatus, 'archived'>
  reason?: string
}
