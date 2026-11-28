import type { Client } from './client.js'

export type ClientSummary = Pick<
  Client,
  | 'id'
  | 'workspaceId'
  | 'code'
  | 'name'
  | 'logoUrl'
  | 'type'
  | 'industry'
  | 'status'
  | 'email'
  | 'phone'
  | 'accountManagerId'
  | 'tags'
  | 'createdAt'
  | 'updatedAt'
>

export interface ClientDirectoryItem extends ClientSummary {
  brandCount: number
  contactCount: number
  socialAccountCount: number
  activeServiceCount: number
}
