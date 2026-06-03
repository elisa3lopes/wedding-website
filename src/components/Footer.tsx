import { Link } from '../router'
import { Sprig } from './Botanical'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <Sprig className="footer__sprig" />
        <p className="footer__names">Elisa &amp; Vian</p>
        <p className="footer__tag">
          Washington D.C. &middot; Singapore &middot; São Paulo
        </p>
        <nav className="footer__links">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <Link to="/story" className="footer__link">
            Our Story
          </Link>
          <Link to="/weddings" className="footer__link">
            Weddings
          </Link>
          <Link to="/rsvp" className="footer__link">
            RSVP
          </Link>
        </nav>
        <p className="footer__fine">
          With love, {new Date().getFullYear()} &middot; Made with leaves &amp;
          gold
        </p>
      </div>
    </footer>
  )
}
