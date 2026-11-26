const commonDirectives = [
  "default-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "media-src 'self' blob:",
  "object-src 'none'",
  "frame-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "worker-src 'self'",
]

export const developmentCSP = [
  ...commonDirectives,
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self' ws://localhost:* ws://127.0.0.1:*",
].join('; ')

export const productionCSP = [
  ...commonDirectives,
  "script-src 'self'",
  "connect-src 'self'",
].join('; ')
