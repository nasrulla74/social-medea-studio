import type {
  AuditableEntity,
  ArchivableEntity,
} from '../common/entity.js'

import type { EntityId } from '../common/identifiers.js'
import type { LanguageCode } from '../common/regional.js'
import type { CommunicationChannel } from '../common/communication.js'
import type { ContactRole } from './contact-role.js'

export interface ClientContact
  extends AuditableEntity,
    ArchivableEntity {

  // Relationship
  clientId: EntityId

  // Identity
  firstName: string
  lastName: string | null
  jobTitle: string | null
  department: string | null

  // Responsibilities
  roles: ContactRole[]

  // Communication
  email: string | null
  phone: string | null
  mobile: string | null
  whatsapp: string | null
  viber: string | null
  telegram: string | null

  preferredChannel: CommunicationChannel | null
  languageCode: LanguageCode | null

  // Management
  isPrimary: boolean
  isActive: boolean
  notes: string | null
}

export type ClientContactSummary = Pick<
  ClientContact,
  | 'id'
  | 'clientId'
  | 'firstName'
  | 'lastName'
  | 'jobTitle'
  | 'roles'
  | 'email'
  | 'phone'
  | 'mobile'
  | 'preferredChannel'
  | 'isPrimary'
  | 'isActive'
>
