import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { weddings } from '../data/weddings'

const rsvpableWeddings = weddings.filter((w) => w.status !== 'past')

export function Rsvp() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // No backend yet — we just acknowledge the guest. Wire this up to a form
    // service / API later (the field names are ready to POST).
    setSubmitted(true)
  }

  return (
    <section className="section">
      <div className="wrap wrap--narrow">
        <PageHeader eyebrow="We hope you can join us" title="RSVP">
          Let us know if you’ll be celebrating with us — and which celebration.
        </PageHeader>

        {submitted ? (
          <div className="rsvp__thanks">
            <h3>Thank you! 💛</h3>
            <p>
              Your response has been noted. We can’t wait to celebrate with you.
            </p>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => setSubmitted(false)}
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form className="rsvp" onSubmit={handleSubmit}>
            <label className="field">
              <span className="field__label">Full name</span>
              <input
                className="field__input"
                name="name"
                type="text"
                required
                placeholder="Your name"
              />
            </label>

            <label className="field">
              <span className="field__label">Email</span>
              <input
                className="field__input"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </label>

            <label className="field">
              <span className="field__label">Which celebration?</span>
              <select className="field__input" name="celebration" required>
                <option value="">Select a celebration…</option>
                {rsvpableWeddings.map((w) => (
                  <option key={w.slug} value={w.slug}>
                    {w.flag} {w.city}
                  </option>
                ))}
                <option value="all">All of them!</option>
              </select>
            </label>

            <fieldset className="field field--radio">
              <legend className="field__label">Will you attend?</legend>
              <label className="radio">
                <input type="radio" name="attending" value="yes" required />
                <span>Joyfully accepts</span>
              </label>
              <label className="radio">
                <input type="radio" name="attending" value="no" />
                <span>Regretfully declines</span>
              </label>
            </fieldset>

            <label className="field">
              <span className="field__label">Number of guests</span>
              <input
                className="field__input"
                name="guests"
                type="number"
                min={1}
                max={10}
                defaultValue={1}
              />
            </label>

            <label className="field">
              <span className="field__label">A note for us (optional)</span>
              <textarea
                className="field__input"
                name="message"
                rows={3}
                placeholder="Dietary needs, song requests, well wishes…"
              />
            </label>

            <button type="submit" className="btn rsvp__submit">
              Send RSVP
            </button>
            <p className="rsvp__note">
              Heads up: this form isn’t connected to a backend yet, so responses
              aren’t saved. We’ll switch it on soon.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
