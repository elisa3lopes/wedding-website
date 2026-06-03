import { useEffect, useState, type ReactNode } from 'react'
import { RouteContext, currentPath, useRoute } from './navigation'

/** Provides the current hash route to the tree and reacts to changes. */
export function Router({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const onChange = () => {
      setPath(currentPath())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return <RouteContext.Provider value={path}>{children}</RouteContext.Provider>
}

type LinkProps = {
  to: string
  className?: string
  activeClassName?: string
  children: ReactNode
  onClick?: () => void
}

export function Link({
  to,
  className,
  activeClassName,
  children,
  onClick,
}: LinkProps) {
  const path = useRoute()
  const target = to.startsWith('/') ? to : `/${to}`
  const isActive =
    target === '/'
      ? path === '/'
      : path === target || path.startsWith(`${target}/`)

  return (
    <a
      href={`#${target}`}
      className={[className, isActive ? activeClassName : '']
        .filter(Boolean)
        .join(' ')}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
