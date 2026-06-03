import { PageHeader } from '../components/PageHeader'

const moments = [
  {
    year: 'The beginning',
    title: 'How we met',
    text: 'Our story is still being written here — a placeholder for the moment two paths first crossed. Add the real version when you’re ready.',
  },
  {
    year: 'Along the way',
    title: 'Falling in love',
    text: 'The trips, the cities, the late-night conversations. This is where the middle of the story will live.',
  },
  {
    year: 'December 1, 2024',
    title: 'The first “I do”',
    text: 'We celebrated our first wedding in Washington D.C., surrounded by family and friends — the first of three joyful gatherings.',
  },
  {
    year: 'Now',
    title: 'Two more to come',
    text: 'Singapore is up next, with São Paulo to follow. We can’t wait to celebrate with everyone we love, across the world.',
  },
]

export function Story() {
  return (
    <section className="section">
      <div className="wrap">
        <PageHeader eyebrow="Elisa &amp; Vian" title="Our Story">
          A love story told across three cities and two cultures.
        </PageHeader>

        <ol className="timeline">
          {moments.map((m) => (
            <li key={m.title} className="timeline__item">
              <div className="timeline__dot" aria-hidden="true" />
              <p className="timeline__year">{m.year}</p>
              <h3 className="timeline__title">{m.title}</h3>
              <p className="timeline__text">{m.text}</p>
            </li>
          ))}
        </ol>

        <p className="placeholder-note">
          📷 Photos and the full story are on their way — check back soon.
        </p>
      </div>
    </section>
  )
}
