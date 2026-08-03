import './Footer.css'

type FooterLink = {
  href: string
  label: string
}

const footerLinks: FooterLink[] = [
  {
    href: '#services',
    label: 'Services',
  },
  {
    href: '#process',
    label: 'Process',
  },
  {
    href: '#cases',
    label: 'Cases',
  },
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <a
            href="/"
            className="site-footer__brand"
            aria-label="MERAVIN Home"
          >
            <span className="site-footer__brand-text">
              MERAVIN
            </span>
          </a>

          <nav
            className="site-footer__nav"
            aria-label="Footer navigation"
          >
            <ul className="site-footer__list">
              {footerLinks.map((item) => (
                <li
                  key={item.href}
                  className="site-footer__item"
                >
                  <a
                    href={item.href}
                    className="site-footer__link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__tagline">
            Reliable software engineering for business.
          </p>

          <p className="site-footer__copy">
            © {year} MERAVIN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
