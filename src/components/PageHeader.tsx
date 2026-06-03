import type { ReactNode } from 'react'
import { LeafTrio } from './Botanical'

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="page-header">
      <LeafTrio className="page-header__leaf" />
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-header__title">{title}</h1>
      {children && <p className="page-header__sub">{children}</p>}
      <div className="divider" aria-hidden="true" />
    </div>
  )
}
