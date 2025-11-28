import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductHighlights from './components/ProductHighlights'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="developers">
          <div className="container dev-strip">
            <div>
              <h2>Built for developers, loved by operators</h2>
              <p className="text-muted">
                Clean REST APIs, typed SDKs, and realtime webhooks help your team ship faster while ops gets
                the controls they need.
              </p>
            </div>
            <div className="dev-grid">
              <div className="code-chip">POST /v1/payments</div>
              <div className="code-chip">Webhook: payment.authorized</div>
              <div className="code-chip">Node, Python, Go SDKs</div>
              <div className="code-chip">Dashboard-level RBAC</div>
            </div>
          </div>
        </section>

        <ProductHighlights />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
