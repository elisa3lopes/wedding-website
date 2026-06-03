import { Link } from '../router'
import { CornerLeaves, Sprig } from '../components/Botanical'
import { weddings, statusLabel } from '../data/weddings'

export function Home() {
  return (
    <>
      <section className="hero">
        <CornerLeaves className="hero__leaves hero__leaves--tl" />
        <CornerLeaves className="hero__leaves hero__leaves--br" flip />

        <div className="hero__inner">
          <p className="eyebrow">We&rsquo;re getting married</p>
          <h1 className="hero__names">
            Elisa <span className="hero__amp">&amp;</span> Vian
          </h1>
          <div className="divider" aria-hidden="true">
            <Sprig />
          </div>
          <p className="hero__sub">
            Three cities, three celebrations, one love story.
            <br />
            Join us in Washington D.C., Singapore &amp; São Paulo.
          </p>
          <div className="hero__cta">
            <Link to="/weddings" className="btn">
              The Celebrations
            </Link>
            <Link to="/rsvp" className="btn btn--ghost">
              RSVP
            </Link>
          </div>
        </div>
      </section>

      <section className="section celebrations">
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: 'center' }}>
            Save the dates
          </p>
          <h2 className="celebrations__title">Our Three Celebrations</h2>
          <div className="cards">
            {weddings.map((w) => (
              <Link key={w.slug} to={`/weddings/${w.slug}`} className="card">
                <span className={`badge badge--${w.status}`}>
                  {statusLabel[w.status]}
                </span>
                <span className="card__flag" aria-hidden="true">
                  {w.flag}
                </span>
                <h3 className="card__city">{w.city}</h3>
                <p className="card__country">{w.country}</p>
                <p className="card__date">{w.date}</p>
                <span className="card__more">View details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section quote">
        <div className="wrap quote__inner">
          <Sprig className="quote__sprig" />
          <p className="quote__text">
            &ldquo;To love is nothing. To be loved is something. But to love and
            be loved, that is everything.&rdquo;
          </p>
        </div>
      </section>
    </>
  )
}
