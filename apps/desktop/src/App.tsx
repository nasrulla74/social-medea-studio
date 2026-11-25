
import { useState } from 'react'

import { AppSidebar } from '@/components/layout/AppSidebar'
import { AppHeader } from '@/components/layout/AppHeader'
import { DashboardPage } from '@/pages/DashboardPage'


import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Dashboard')

  return (
    <div className="app-layout">
      <AppSidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <main className="main-content">
        <AppHeader activePage={activePage} />

        <section className="page-content">
          {activePage === 'Dashboard' ? (
            <DashboardPage />
          ) : (
            <div className="panel placeholder">
              <h3>{activePage}</h3>

              <p>
                This module will be implemented in an
                upcoming development phase.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App

