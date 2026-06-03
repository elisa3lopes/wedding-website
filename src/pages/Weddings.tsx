import { Link } from '../router'
import { PageHeader } from '../components/PageHeader'
import { weddings, statusLabel } from '../data/weddings'

export function Weddings() {
  return (
    <section className="section">
      <div className="wrap">
        <PageHeader eyebrow="Save the dates" title="The Celebrations">
          We’re saying “I do” three times — in the three places that shaped us.
          Choose a celebration to learn more.
        </PageHeader>

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
  )
}
