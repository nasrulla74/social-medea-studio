# Shared Data Contracts

## Overview

Social Medea Studio uses a centralized TypeScript
workspace package for shared application contracts.

Package: @social-medea/shared-types
Version: 0.1.0
Module format: ESM
Package manager: pnpm
Build system: TypeScript and Turborepo

## Objectives

- Maintain a single source of truth for data contracts.
- Avoid duplicated types across applications.
- Establish consistent API request and response structures.
- Support future multi-tenant SaaS architecture.
- Separate frontend contracts from database implementation.
- Support multiple social media integration providers.

## Consumers

- Electron desktop application
- NestJS backend API (planned)
- Next.js client portal (planned)
- Background workers (planned)
- Shared API client (planned)

## Module Structure

### Common

- Entity identifiers
- Workspace identifiers
- User identifiers
- Audit and archive fields
- Pagination and sorting
- Addresses
- Regional preferences
- Communication channels
- Monetary values
- API responses and error codes

### Clients

- Client profiles and classifications
- Client lifecycle statuses
- Client contacts and responsibilities
- Brand profiles
- Brand visual identity
- Brand voice and tone
- Target audience segments
- Brand content guidelines
- Client service agreements
- Client subscriptions
- API requests and responses
- Directory queries and filters
- Client statistics and overview

### Services

- Agency service catalog
- Service categories
- Service packages
- Billing cycles
- Service lifecycle statuses
- Deliverable definitions

### Social

- Social media platform classifications
- Account classifications
- Connection statuses
- Integration providers
- Account capabilities
- Connection metadata
- Account statistics
- Social account profiles

## Entity Relationships

Workspace
  Client
    Contacts
    Brands
      Social Accounts
    Client Services
    Client Subscriptions

Workspace
  Service Catalog
  Service Packages

## Design Decisions

- Entity identifiers are serialized as strings.
- Dates and timestamps use ISO-compatible string contracts.
- Monetary amounts are serialized as decimal strings.
- Optional entity values generally use explicit null.
- Update requests use optional properties.
- Archived records are retained instead of permanently deleted.
- Client status changes use dedicated operations.
- A client can have multiple contacts and brands.
- A brand can have multiple social media accounts.
- Contacts are separate from authenticated portal users.
- Contact roles do not grant application permissions.
- Assigned service terms are independent of catalog changes.
- Subscription billing must avoid duplicate service charges.
- Publishing integrations use interchangeable providers.
- Social account capabilities default to disabled.
- Unavailable social metrics are represented by null.

## Security Requirements

- Enforce workspace isolation on the backend.
- Validate ownership of all related entities.
- Derive audit fields from authenticated user context.
- Reject unauthorized request properties.
- Enforce primary contact and primary brand uniqueness.
- Never expose OAuth tokens, refresh tokens, passwords,
  API keys or private keys through frontend contracts.
- Enforce publishing permissions on the backend.
- Keep internal notes out of client portal responses.
- Treat brand instructions as untrusted business data.
- Use runtime validation for all external input.

## Build Integration

The shared package is compiled into its dist directory.

Consumers import contracts using:

    import type { Client } from '@social-medea/shared-types'

Runtime constants are imported using:

    import { CLIENT_STATUSES } from '@social-medea/shared-types'

Turborepo builds shared dependencies before consumer tasks.

Standalone desktop scripts also prepare the shared package.

## Validation Commands

    pnpm --filter @social-medea/shared-types run typecheck
    pnpm --filter @social-medea/shared-types run build
    pnpm --dir apps/desktop run typecheck
    pnpm --dir apps/desktop run lint
    pnpm run typecheck

## Current Limitations

- TypeScript contracts do not provide runtime validation.
- Database schemas and migrations are not implemented.
- REST endpoints are not implemented.
- Authentication and authorization are pending.
- OAuth integrations and credential storage are pending.
- Platform classifications do not guarantee API support.
- Subscription billing and deliverable tracking are pending.
- Client portal-specific response contracts are pending.
- Automatic shared-package watch mode is not configured.
- Automated application tests are pending.

## Development Status

Phase 6.2 establishes the shared data model foundation.

The next phase introduces the desktop Client Management
feature structure and prepares the client directory.
