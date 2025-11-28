import React from 'react'
import '../styles/hero.css'

export default function Hero() {
  const activities = [
    { label: 'Acme Retail • Settled', amount: '₹82,400', time: '2m ago' },
    { label: 'UpNorth Mobility • Captured', amount: '₹1,24,180', time: '12m ago' },
    { label: 'Lumen D2C • Refunded', amount: '₹12,040', time: '18m ago' },
  ]

  return (
    <section id="top" className="container hero">
      <div className="hero-copy">
        <span className="badge">Trusted fintech stack</span>
        <h1>Modern payments infrastructure for ambitious businesses</h1>
        <p>
          RazorPay unifies online payments, automated payouts, and real-time intelligence so your
          revenue engine never slows down.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#signup">
            Sign Up Now
          </a>
          <a className="btn btn-outline" href="#sales">
            Talk to Sales
          </a>
        </div>
        <div className="hero-trust">
          <span>✓ 99.97% uptime</span>
          <span>•</span>
          <span>PCI-DSS ready</span>
          <span>•</span>
          <span>24/7 support</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Dashboard preview">
        <div className="dashboard-card">
          <div className="dashboard-header">
            <h3>Revenue Overview</h3>
            <span className="status-pill">Live</span>
          </div>
          <div className="metrics-grid">
            <div className="metric">
              <h4>Gross volume</h4>
              <strong>₹8.4 Cr</strong>
              <small>+12.4% vs last week</small>
            </div>
            <div className="metric">
              <h4>Successful payments</h4>
              <strong>98.4%</strong>
              <small>Uptime SLA 99.97%</small>
            </div>
            <div className="metric">
              <h4>Average payout</h4>
              <strong>₹54,210</strong>
              <small>T+0 settlements</small>
            </div>
          </div>
          <div className="activity-list" aria-label="Recent transactions">
            {activities.map((item) => (
              <div className="activity-row" key={item.label}>
                <span>{item.label}</span>
                <div>
                  <strong>{item.amount}</strong>
                  <small style={{ display: 'block' }}>{item.time}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="accent-card">
          <h4>Smart routing</h4>
          <p className="text-muted">Intelligent retries across PSPs to lift success rates.</p>
          <div className="progress" aria-label="Success rate">
            <span></span>
          </div>
          <small className="text-muted">Blended success rate • 98.4%</small>
        </div>
      </div>
    </section>
  )
}
