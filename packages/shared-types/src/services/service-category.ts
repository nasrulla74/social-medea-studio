export const SERVICE_CATEGORIES = [
  'social_media_management',
  'content_creation',
  'graphic_design',
  'video_production',
  'photography',
  'paid_advertising',
  'brand_development',
  'community_management',
  'seo',
  'website_management',
  'analytics_reporting',
  'strategy_consulting',
  'influencer_marketing',
  'email_marketing',
  'ai_automation',
  'other',
] as const

export type ServiceCategory =
  (typeof SERVICE_CATEGORIES)[number]

export const SERVICE_CATEGORY_LABELS = {
  social_media_management: 'Social Media Management',
  content_creation: 'Content Creation',
  graphic_design: 'Graphic Design',
  video_production: 'Video Production',
  photography: 'Photography',
  paid_advertising: 'Paid Advertising',
  brand_development: 'Brand Development',
  community_management: 'Community Management',
  seo: 'SEO',
  website_management: 'Website Management',
  analytics_reporting: 'Analytics & Reporting',
  strategy_consulting: 'Strategy & Consulting',
  influencer_marketing: 'Influencer Marketing',
  email_marketing: 'Email Marketing',
  ai_automation: 'AI Automation',
  other: 'Other',
} as const satisfies Record<ServiceCategory, string>
