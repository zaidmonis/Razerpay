import React from 'react'
import '../styles/footer.css'

const columns = [
  {
    title: 'Products',
    links: ['Payment Gateway', 'Subscriptions', 'Payouts', 'Smart Analytics'],
  },
  {
    title: 'Developers',
    links: ['API Docs', 'Webhooks', 'SDKs', 'Status'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact', 'Legal'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Guides', 'Security', 'Pricing'],
  },
]

export default function Footer() {
  return (
    <footer id="resources">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">R</span>
            RazorPay
          </div>
          <p className="text-muted">A unified money movement platform for the fastest growing companies.</p>
        </div>

        {columns.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="container sub-footer">
        <div className="text-muted">© {new Date().getFullYear()} RazorPay Labs. All rights reserved.</div>
        <div className="socials" aria-label="Social links">
          <span aria-hidden="true">in</span>
          <span aria-hidden="true">𝕏</span>
          <span aria-hidden="true">→</span>
        </div>
        <div className="text-muted">
          <a href="#terms">Terms</a> • <a href="#privacy">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
