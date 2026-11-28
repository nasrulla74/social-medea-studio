export const CONTACT_ROLES = [
  'owner',
  'director',
  'general_manager',
  'marketing_manager',
  'social_media_manager',
  'content_approver',
  'finance',
  'administration',
  'it',
  'other',
] as const

export type ContactRole =
  (typeof CONTACT_ROLES)[number]

export const CONTACT_ROLE_LABELS = {
  owner: 'Owner',
  director: 'Director',
  general_manager: 'General Manager',
  marketing_manager: 'Marketing Manager',
  social_media_manager: 'Social Media Manager',
  content_approver: 'Content Approver',
  finance: 'Finance',
  administration: 'Administration',
  it: 'IT',
  other: 'Other',
} as const satisfies Record<ContactRole, string>
