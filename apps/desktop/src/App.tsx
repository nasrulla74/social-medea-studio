import { useState } from 'react'

import { AppSidebar } from '@/components/layout/AppSidebar'
import { AppHeader } from '@/components/layout/AppHeader'

import { DashboardPage } from '@/pages/DashboardPage'
import { SettingsPage } from '@/pages/SettingsPage'

import { useTheme } from '@/hooks/useTheme'

import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Dashboard')

  const {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  } = useTheme()

  function renderPage() {
    switch (activePage) {
      case 'Dashboard':
        return <DashboardPage />

      case 'Settings':
        return (
          <SettingsPage
            theme={theme}
            onThemeChange={setTheme}
          />
        )

      default:
        return (
          <div className="panel placeholder">
            <h3>{activePage}</h3>
            <p>
              This module will be implemented in an
              upcoming development phase.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="app-layout">
      <AppSidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <main className="main-content">
        <AppHeader
          activePage={activePage}
          resolvedTheme={resolvedTheme}
          onToggleTheme={toggleTheme}
        />

        <section className="page-content">
          {renderPage()}
        </section>
      </main>
    </div>
  )
}

export default App
