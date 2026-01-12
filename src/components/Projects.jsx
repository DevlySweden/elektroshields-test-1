const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section section--projects">
      <div className="container">
        <div className="section__intro">
          <h2 className="section__title">{projects.sectionTitle}</h2>
          <p className="section__text">{projects.sectionText}</p>
        </div>
        <div className="projects-grid">
          {projects.items.map((item) => (
            <article className="project-card" key={item.title}>
              <div className="project-card__media">
                <img src={item.imageUrl} alt={item.title} loading="lazy" />
              </div>
              <div className="project-card__body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
