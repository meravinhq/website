import './Header.css'

type NavigationItem = {
  href: string
  label: string
}

const navigation: NavigationItem[] = [
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

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          href="/"
          className="site-header__brand"
          aria-label="MERAVIN Home"
        >
          <span className="site-header__brand-text">
            MERAVIN
          </span>
        </a>

        <nav
          className="site-header__nav"
          aria-label="Primary navigation"
        >
          <ul className="site-header__list">
            {navigation.map((item) => (
              <li
                key={item.href}
                className="site-header__item"
              >
                <a
                  href={item.href}
                  className="site-header__link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="site-header__language"
            aria-label="Switch language"
          >
            EN
          </button>

          <a
            href="#contact"
            className="site-header__cta"
          >
            Start Project
          </a>
        </div>
      </div>
    </header>
  )
}