export interface BrandColor {
  name: string
  hex: string
}

export interface BrandTypography {
  headingFont: string | null
  bodyFont: string | null
  accentFont: string | null
}

export interface BrandLogos {
  primaryUrl: string | null
  secondaryUrl: string | null
  iconUrl: string | null
  lightUrl: string | null
  darkUrl: string | null
}

export interface BrandVisualIdentity {
  logos: BrandLogos

  primaryColor: BrandColor | null
  secondaryColor: BrandColor | null
  accentColors: BrandColor[]

  typography: BrandTypography

  visualStyle: string | null
  guidelinesUrl: string | null
}
