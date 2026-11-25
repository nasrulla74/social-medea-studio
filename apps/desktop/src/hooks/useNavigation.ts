import { useState } from 'react'

import {
  navigationItems,
  DEFAULT_NAVIGATION_ID,
} from '@/config/navigation'

import type {
  NavigationId,
} from '@/config/navigation'

export function useNavigation() {
  const [activePage, setActivePage] =
    useState<NavigationId>(DEFAULT_NAVIGATION_ID)

  const activeItem =
    navigationItems.find(
      (item) => item.id === activePage
    ) ?? navigationItems[0]

  function navigate(page: NavigationId) {
    setActivePage(page)
  }

  function navigateHome() {
    setActivePage(DEFAULT_NAVIGATION_ID)
  }

  function isActive(page: NavigationId) {
    return activePage === page
  }

  return {
    activePage,
    activeItem,
    navigate,
    navigateHome,
    isActive,
  }
}
