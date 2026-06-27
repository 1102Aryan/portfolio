export default function Projects({ items }) {
  return (
    <section className="projects">
      <div className="section-inner glass-section">
        <div className="projectscontent">
          <h1><span>Projects</span></h1>
          <div className="projectbox">
            {items.map((project) => (
              <div className="projectcard" key={project.title}>
                {project.img ? (
                  <img src={project.img} alt={project.title} />
                ) : (
                  <div className="project-placeholder">
                    <i className="fas fa-code"></i>
                  </div>
                )}
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.href} className="btn" target="_blank" rel="noreferrer">View</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
