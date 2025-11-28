import React from 'react'
import '../styles/features.css'

const features = [
  {
    title: 'Enterprise-grade reliability',
    description: 'Active-active architecture, circuit-breakers, and rollback ready deployments keep you always on.',
  },
  {
    title: 'Developer-first APIs',
    description: 'Clear docs, SDKs, and webhooks that integrate with your stack in hours—not weeks.',
  },
  {
    title: 'Compliant by design',
    description: 'Tokenized vaults, PCI-DSS readiness, and audit-friendly exports simplify compliance.',
  },
  {
    title: 'Global-ready stack',
    description: 'Multi-currency acceptance, local payouts, and smart routing for international expansion.',
  },
]

export default function Features() {
  return (
    <section id="payments">
      <div className="container">
        <div className="section-header">
          <h2>Why businesses choose RazorPay</h2>
          <p>Everything you need to operate, scale, and delight customers with payments.</p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <article className="card feature-card" key={feature.title}>
              <div className="feature-icon" aria-hidden="true">
                •
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
