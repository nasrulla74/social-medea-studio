import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'social-medea-theme'

function getInitialTheme(): Theme {
  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY)

    if (
      savedTheme === 'light' ||
      savedTheme === 'dark' ||
      savedTheme === 'system'
    ) {
      return savedTheme
    }
  } catch {
    // Use the default if storage is unavailable.
  }

  return 'system'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const resolvedTheme =
    theme === 'system'
      ? systemDark
        ? 'dark'
        : 'light'
      : theme

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    )

    const handleChange = (event: MediaQueryListEvent) => {
      setSystemDark(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      resolvedTheme === 'dark'
    )

    document.documentElement.style.colorScheme = resolvedTheme
  }, [resolvedTheme])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Theme remains available for the current session.
    }
  }, [theme])

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  }
}
