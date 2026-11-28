import type {
  EntityId,
  WorkspaceId,
  UserId,
  ISODateTime,
} from './identifiers.js'

export interface BaseEntity {
  id: EntityId
  createdAt: ISODateTime
  updatedAt: ISODateTime
}

export interface WorkspaceEntity extends BaseEntity {
  workspaceId: WorkspaceId
}

export interface AuditableEntity extends WorkspaceEntity {
  createdBy: UserId | null
  updatedBy: UserId | null
}

export interface ArchivableEntity {
  archivedAt: ISODateTime | null
  archivedBy: UserId | null
}
