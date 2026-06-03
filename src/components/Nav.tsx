import { useState } from 'react'
import { Link } from '../router'
import { LeafTrio } from './Botanical'

const links = [
  { to: '/', label: 'Home' },
  { to: '/story', label: 'Our Story' },
  { to: '/weddings', label: 'Weddings' },
  { to: '/rsvp', label: 'RSVP' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Link to="/" className="nav__brand" onClick={close}>
          <LeafTrio className="nav__leaf" />
          <span className="nav__names">Elisa &amp; Vian</span>
        </Link>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav__link"
              activeClassName="is-active"
              onClick={close}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
