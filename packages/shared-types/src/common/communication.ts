export const COMMUNICATION_CHANNELS = [
  'email',
  'phone',
  'whatsapp',
  'viber',
  'telegram',
  'sms',
  'client_portal',
  'other',
] as const

export type CommunicationChannel =
  (typeof COMMUNICATION_CHANNELS)[number]

export const COMMUNICATION_CHANNEL_LABELS = {
  email: 'Email',
  phone: 'Phone',
  whatsapp: 'WhatsApp',
  viber: 'Viber',
  telegram: 'Telegram',
  sms: 'SMS',
  client_portal: 'Client Portal',
  other: 'Other',
} as const satisfies Record<CommunicationChannel, string>
