import React from 'react'
import '../styles/cta.css'

export default function CtaBand() {
  return (
    <section id="pricing" className="cta-band">
      <div className="container cta-inner">
        <h3>Start accepting payments in minutes</h3>
        <p>Launch faster with guided onboarding, sandbox keys, and world-class documentation.</p>
        <a className="btn btn-primary" href="#signup">
          Create a Free Account
        </a>
      </div>
    </section>
  )
}
