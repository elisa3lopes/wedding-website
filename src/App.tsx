import './App.css'
import { Router, Link } from './router'
import { useRoute } from './navigation'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Story } from './pages/Story'
import { Weddings } from './pages/Weddings'
import { WeddingDetail } from './pages/WeddingDetail'
import { Rsvp } from './pages/Rsvp'
import { PageHeader } from './components/PageHeader'

function Routes() {
  const path = useRoute()

  if (path === '/') return <Home />
  if (path === '/story') return <Story />
  if (path === '/weddings') return <Weddings />
  if (path.startsWith('/weddings/')) {
    const slug = path.slice('/weddings/'.length)
    return <WeddingDetail slug={slug} />
  }
  if (path === '/rsvp') return <Rsvp />

  return (
    <section className="section">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <PageHeader eyebrow="Lost among the leaves" title="Page not found">
          That page wandered off the path.
        </PageHeader>
        <Link to="/" className="btn">
          Back home
        </Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <main className="app__main">
          <Routes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}
