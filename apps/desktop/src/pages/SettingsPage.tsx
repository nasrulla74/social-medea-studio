import { PageContainer } from '@/components/layout/PageContainer'
import { PageHeader } from '@/components/layout/PageHeader'

import { Monitor, Moon, Sun, Palette, Check } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import type { Theme } from '@/hooks/useTheme'

interface SettingsPageProps {
  theme: Theme
  onThemeChange: (theme: Theme) => void
}

const themeOptions = [
  {
    value: 'light',
    label: 'Light',
    description: 'Use light appearance',
    icon: Sun,
  },
  {
    value: 'dark',
    label: 'Dark',
    description: 'Use dark appearance',
    icon: Moon,
  },
  {
    value: 'system',
    label: 'System',
    description: 'Follow operating system',
    icon: Monitor,
  },
] as const

export function SettingsPage({
  theme,
  onThemeChange,
}: SettingsPageProps) {
  return (
    <PageContainer>
      <PageHeader
        title="Settings"
        description="Manage your application preferences."
      />

      <Card className="max-w-[760px] gap-[12px] rounded-[6px] py-[12px] shadow-none">
        <CardHeader className="px-[12px]">
          <CardTitle className="flex items-center gap-[8px] text-[14px] font-medium">
            <Palette size={16} strokeWidth={1.7} />
            Appearance
          </CardTitle>
        </CardHeader>

        <CardContent className="px-[12px]">
          <div className="border-t border-border pt-[12px]">
            <h3 className="text-[13px] font-medium">
              Application theme
            </h3>

            <p className="mt-1 text-[12px] text-muted-foreground">
              Choose how Social Medea Studio looks on your device.
            </p>

            <div
              role="group"
              aria-label="Application theme"
              className="mt-[12px] grid grid-cols-1 gap-[8px] sm:grid-cols-3"
            >
              {themeOptions.map((option) => {
                const Icon = option.icon
                const selected = theme === option.value

                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => onThemeChange(option.value)}
                    className={`flex min-h-[90px] flex-col gap-[8px] rounded-[6px] border p-[12px] text-left transition-colors ${
                      selected
                        ? 'border-foreground/50 bg-muted'
                        : 'border-border hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <Icon size={18} strokeWidth={1.7} />

                      {selected && (
                        <Check size={15} strokeWidth={2} />
                      )}
                    </div>

                    <div>
                      <div className="text-[13px] font-medium">
                        {option.label}
                      </div>

                      <div className="mt-1 text-[11px] text-muted-foreground">
                        {option.description}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            <p className="mt-[12px] text-[11px] text-muted-foreground">
              Your theme preference is automatically saved.
            </p>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
