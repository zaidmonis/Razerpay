import React, { useState } from 'react'
import '../styles/highlights.css'

const products = [
  {
    key: 'gateway',
    title: 'Payment Gateway',
    description: 'Delight customers with high success rates, instant retries, and localized payment options.',
    bullets: ['150+ payment methods', 'Auto-retry with smart routing', '3DS & tokenization built-in', 'Hosted checkout & drop-ins'],
  },
  {
    key: 'subscriptions',
    title: 'Subscriptions',
    description: 'Manage recurring revenue with intelligent billing, proration, and automated dunning.',
    bullets: ['Multiple billing cycles', 'Smart retries & webhooks', 'Built-in invoicing', 'Revenue analytics'],
  },
  {
    key: 'payouts',
    title: 'Payouts',
    description: 'Disburse funds instantly to vendors, partners, or customers with flexible controls.',
    bullets: ['T+0 settlements', 'Approval workflows', 'GST-ready reports', 'UPI, bank, and card payouts'],
  },
  {
    key: 'analytics',
    title: 'Smart Analytics',
    description: 'Centralized dashboard for finance, ops, and product teams with live insights.',
    bullets: ['Cohort & funnel analysis', 'Alerting on anomalies', 'Export-ready statements', 'Team-level permissions'],
  },
]

export default function ProductHighlights() {
  const [activeKey, setActiveKey] = useState(products[0].key)
  const activeProduct = products.find((item) => item.key === activeKey)

  return (
    <section id="products">
      <div className="container">
        <div className="section-header">
          <h2>Products built for every revenue team</h2>
          <p>Switch between products to see how RazorPay adapts to your workflows.</p>
        </div>
        <div className="highlights">
          <div className="tab-list" role="tablist">
            {products.map((product) => (
              <button
                key={product.key}
                role="tab"
                aria-selected={activeKey === product.key}
                className={`tab-button ${activeKey === product.key ? 'active' : ''}`}
                onClick={() => setActiveKey(product.key)}
              >
                {product.title}
              </button>
            ))}
          </div>
          <div className="tab-panel" role="tabpanel">
            <h3>{activeProduct.title}</h3>
            <p>{activeProduct.description}</p>
            <ul>
              {activeProduct.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <a href="#learn-more">Learn more →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
