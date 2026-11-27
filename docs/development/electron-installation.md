# Electron Installation and Compatibility

## Development Environment

- Operating system: Linux Mint 22.3
- Architecture: x86_64
- Node.js: 24.22.3
- pnpm: 10.34.9
- Electron: 45.5.0
- Electron Builder: 26.18.0
- Vite: 8.4.0
- React: 19.3.1
- TypeScript: 5.9.3

## Standard Installation

From the monorepo root:

    pnpm install --frozen-lockfile

Verify Electron:

    pnpm --dir apps/desktop exec electron --version

Start the desktop application:

    pnpm --dir apps/desktop dev

## Known Hardware Compatibility Issue

The Electron installation process encountered SIGILL
on an Intel Core i5-3470 development machine.

This processor supports AVX but does not support AVX2.

The failure occurred inside a native archive extraction
module during Electron installation.

The exact unsupported CPU instruction was not confirmed.

Electron itself launched successfully after manually
extracting the downloaded distribution archive.

## Recovery Procedure

Use this procedure only if the normal Electron
installation fails with the described extraction error.

1. Locate the installed Electron package directory.
2. Locate the matching Electron ZIP in the local cache.
3. Verify the archive against the expected SHA-256 checksum.
4. Test the ZIP archive integrity.
5. Back up the incomplete Electron dist directory.
6. Extract the verified archive using system unzip.
7. Move electron.d.ts to the package root if necessary.
8. Restore executable permissions.
9. Create path.txt containing the Electron executable name.
10. Verify Electron and TypeScript.

## Diagnostic Commands

Inspect CPU capabilities:

    lscpu

Inspect the installed Electron package directory:

    realpath apps/desktop/node_modules/electron

Locate cached Electron archives:

    find "$HOME/.cache/electron" -type f -name '*.zip'

Inspect recent kernel errors:

    sudo dmesg | tail -n 50

Verify Electron:

    pnpm --dir apps/desktop exec electron --version

Validate application source:

    pnpm run lint
    pnpm run typecheck

## Important Notes

- Do not disable Electron sandboxing to fix installation.
- Do not install unverified Electron binaries.
- Do not commit node_modules or downloaded Electron archives.
- Do not assume every SIGILL error has the same cause.
- Manual extraction is a recovery workaround, not the
  standard installation procedure.
- Clean installation on additional hardware remains
  to be validated.
