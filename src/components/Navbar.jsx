import React, { useState } from 'react'
import '../styles/navbar.css'

const navLinks = [
  { label: 'Payments', href: '#payments' },
  { label: 'Products', href: '#products' },
  { label: 'Developers', href: '#developers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand" onClick={handleLinkClick}>
          <span className="brand-mark">R</span>
          RazorPay
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-outline" href="#login">
            Log In
          </a>
          <a className="btn btn-primary" href="#signup">
            Sign Up
          </a>
        </div>

        <button
          className="hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {open && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <div className="mobile-actions">
            <a className="btn btn-outline" href="#login" onClick={handleLinkClick}>
              Log In
            </a>
            <a className="btn btn-primary" href="#signup" onClick={handleLinkClick}>
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
