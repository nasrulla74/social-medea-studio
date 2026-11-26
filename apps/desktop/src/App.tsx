import { AppSidebar } from '@/components/layout/AppSidebar'
import { AppHeader } from '@/components/layout/AppHeader'
import { ModulePlaceholder } from '@/components/common/ModulePlaceholder'

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
          <ModulePlaceholder
            title={activeItem.label}
            description={activeItem.description}
            icon={activeItem.icon}
          />
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
