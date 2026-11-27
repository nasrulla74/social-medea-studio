# Dependency Security Audit

## Audit Date

2026-11-27

## Project

Social Medea Studio

## Audit Summary

| Severity | Initial | Current |
|----------|---------|---------|
| Critical | 1 | 0 |
| High | 25 | 0 |
| Moderate | 38 | 2 |
| Low | 9 | 0 |
| Total | 73 | 2 |

Reduction in reported vulnerabilities: 97.3%.

The production dependency audit reports no known
vulnerabilities at the time of this review.

## Remaining Security Exceptions

Advisory: GHSA-g3hv-75wg-m249

https://github.com/advisories/GHSA-g3hv-75wg-m249

Package: minimatch

Severity: Moderate

Risk: Potential denial of service through globparts
amplification.

Affected versions reported by the audit:

- minimatch >=7.0.0 and <11.0.1

Patched versions:

- minimatch >=11.0.1

Affected dependency paths:

- electron-builder > app-builder-lib > minimatch
- electron-builder > app-builder-lib >
  @electron/universal > minimatch

## Exception Rationale

Electron Builder 26.18.0 was the latest stable version
available during this review.

Its dependency tree requires:

- app-builder-lib 26.18.0
- minimatch ^10.2.5
- @electron/universal 2.0.3

Forced major-version overrides may introduce packaging
compatibility problems.

The remaining vulnerabilities are temporarily accepted
for internal development pending upstream remediation.

This exception must be reviewed before public distribution.

## Mitigation

- Do not process untrusted glob patterns in build workflows.
- Restrict build environments to trusted developers.
- Review dependency updates regularly.
- Preserve the committed pnpm lockfile.
- Reassess exceptions before production releases.
- Do not suppress security audit results.

## Dependency Management Policy

- Pin direct application dependencies to exact versions.
- Commit pnpm-lock.yaml.
- Use frozen lockfile installation in CI.
- Review dependency upgrades individually.
- Validate lint, typecheck and application behavior.
- Approve dependency build scripts only when necessary.
- Prefer upstream security fixes over forced overrides.

## Audit Commands

Run from the monorepo root:

    pnpm audit
    pnpm audit --prod
    pnpm outdated -r
    pnpm run lint
    pnpm run typecheck

## Limitations

A clean production dependency audit does not guarantee
that the application or packaged binaries are secure.

Electron runtime security, application authorization,
API security and deployment security require separate
validation.
