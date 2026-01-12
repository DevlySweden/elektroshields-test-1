import useScrollPosition from '../hooks/useScrollPosition'

const Header = ({ site, projects, contactSection }) => {
  const isScrolled = useScrollPosition(40)

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label={site.company.name}>
          {site.branding.logoUrl ? (
            <img className="brand__logo" src={site.branding.logoUrl} alt={site.company.name} />
          ) : (
            <span className="brand__text">{site.company.name}</span>
          )}
        </a>
        <nav className="nav" aria-label={site.company.name}>
          <a className="nav__link" href="#projects">
            {projects.sectionTitle}
          </a>
          <a className="nav__link" href="#contact">
            {contactSection.sectionTitle}
          </a>
        </nav>
        <a
          className={`btn btn--primary ${isScrolled ? 'btn--solid' : 'btn--glass'}`}
          href="#contact"
        >
          {site.hero.ctaPrimary}
        </a>
      </div>
    </header>
  )
}

export default Header
