const Hero = ({ site }) => {
  return (
    <section
      id="top"
      className="hero"
      style={{ backgroundImage: `url(${site.hero.imageUrl})` }}
    >
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__content">
        <span className="hero__badge">{site.hero.badge}</span>
        <h1 className="hero__title">{site.hero.headline}</h1>
        <p className="hero__text">{site.hero.subtext}</p>
        <div className="hero__actions">
          <a className="btn btn--primary btn--glass" href="#contact">
            {site.hero.ctaPrimary}
          </a>
          <a className="btn btn--ghost" href="#projects">
            {site.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
