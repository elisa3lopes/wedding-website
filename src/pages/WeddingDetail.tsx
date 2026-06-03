import { Link } from '../router'
import { PageHeader } from '../components/PageHeader'
import { CornerLeaves } from '../components/Botanical'
import { statusLabel, weddingBySlug } from '../data/weddings'

export function WeddingDetail({ slug }: { slug: string }) {
  const wedding = weddingBySlug(slug)

  if (!wedding) {
    return (
      <section className="section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <PageHeader eyebrow="Hmm" title="Celebration not found">
            We couldn’t find that one.
          </PageHeader>
          <Link to="/weddings" className="btn">
            Back to all celebrations
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section detail">
      <CornerLeaves className="detail__leaves" />
      <div className="wrap">
        <PageHeader
          eyebrow={`${wedding.flag} ${wedding.country}`}
          title={wedding.city}
        >
          {wedding.tagline}
        </PageHeader>

        <div className="detail__body">
          <span className={`badge badge--${wedding.status}`}>
            {statusLabel[wedding.status]}
          </span>
          <p className="detail__blurb">{wedding.blurb}</p>

          <dl className="detail__grid">
            {wedding.details.map((d) => (
              <div key={d.label} className="detail__cell">
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>

          <p className="placeholder-note">
            📷 Photos & final details coming soon.
          </p>

          <div className="detail__actions">
            {wedding.status !== 'past' && (
              <Link to="/rsvp" className="btn">
                RSVP for {wedding.short}
              </Link>
            )}
            <Link to="/weddings" className="btn btn--ghost">
              All celebrations
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
