export type WeddingStatus = 'past' | 'upcoming' | 'planning'

export type Wedding = {
  /** URL slug, e.g. "/weddings/singapore" */
  slug: string
  city: string
  country: string
  /** Short label used in nav / cards */
  short: string
  flag: string
  status: WeddingStatus
  /** Human date, or "" if not set yet */
  date: string
  /** Hero tagline for the detail page */
  tagline: string
  blurb: string
  /** A few details — venue/dress code/etc. Use "TBA" freely; it's a stub. */
  details: { label: string; value: string }[]
}

export const weddings: Wedding[] = [
  {
    slug: 'dc',
    city: 'Washington, D.C.',
    country: 'United States',
    short: 'Washington D.C.',
    flag: '🇺🇸',
    status: 'past',
    date: 'December 1, 2024',
    tagline: 'Where it all began',
    blurb:
      'Our first celebration, surrounded by family and friends in the city where our story took root. Thank you to everyone who made it unforgettable.',
    details: [
      { label: 'Date', value: 'December 1, 2024' },
      { label: 'City', value: 'Washington, D.C.' },
      { label: 'Status', value: 'Celebrated 💛' },
      { label: 'Photos', value: 'Coming soon' },
    ],
  },
  {
    slug: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    short: 'Singapore',
    flag: '🇸🇬',
    status: 'planning',
    date: 'Date to be announced',
    tagline: 'The celebration we are planning now',
    blurb:
      'Our next gathering brings everyone together in Singapore. Details are coming together — check back soon, and let us know if you can join us.',
    details: [
      { label: 'Date', value: 'To be announced' },
      { label: 'City', value: 'Singapore' },
      { label: 'Venue', value: 'TBA' },
      { label: 'Dress code', value: 'TBA' },
    ],
  },
  {
    slug: 'sao-paulo',
    city: 'São Paulo',
    country: 'Brazil',
    short: 'São Paulo',
    flag: '🇧🇷',
    status: 'upcoming',
    date: 'Date to be announced',
    tagline: 'A celebration to come',
    blurb:
      'We will close out our celebrations in São Paulo with Vian and Elisa’s Brazilian family and friends. More details to follow.',
    details: [
      { label: 'Date', value: 'To be announced' },
      { label: 'City', value: 'São Paulo' },
      { label: 'Venue', value: 'TBA' },
      { label: 'Dress code', value: 'TBA' },
    ],
  },
]

export function weddingBySlug(slug: string): Wedding | undefined {
  return weddings.find((w) => w.slug === slug)
}

export const statusLabel: Record<WeddingStatus, string> = {
  past: 'Celebrated',
  planning: 'Planning now',
  upcoming: 'Coming soon',
}
