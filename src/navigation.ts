import { createContext, useContext } from 'react'

/**
 * Routing primitives (no JSX) kept separate from the router components so the
 * component files can stay fast-refresh friendly.
 *
 * Routes look like "#/weddings/singapore". The leading "#/" keeps deep links
 * shareable while working on any static host without server rewrite rules.
 */

export function currentPath(): string {
  const hash = window.location.hash.replace(/^#/, '')
  return hash || '/'
}

export const RouteContext = createContext<string>('/')

export function useRoute(): string {
  return useContext(RouteContext)
}

export function navigate(to: string) {
  window.location.hash = to.startsWith('/') ? to : `/${to}`
}
