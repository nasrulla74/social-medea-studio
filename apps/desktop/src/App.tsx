import { AppSidebar } from '@/components/layout/AppSidebar'
import { AppHeader } from '@/components/layout/AppHeader'

import { DashboardPage } from '@/pages/DashboardPage'
import { SettingsPage } from '@/pages/SettingsPage'

import { useTheme } from '@/hooks/useTheme'
import { useNavigation } from '@/hooks/useNavigation'

import './App.css'

function App() {
  const {
    activePage,
    activeItem,
    navigate,
  } = useNavigation()

  const {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  } = useTheme()

  function renderPage() {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />

      case 'settings':
        return (
          <SettingsPage
            theme={theme}
            onThemeChange={setTheme}
          />
        )

      default:
        return (
          <div className="panel placeholder">
            <h3>{activeItem.label}</h3>
            <p>{activeItem.description}</p>
            <p className="mt-2">
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
        onNavigate={navigate}
      />

      <main className="main-content">
        <AppHeader
          activePage={activeItem.label}
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
