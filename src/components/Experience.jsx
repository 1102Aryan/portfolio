export default function Experience({ items }) {
  return (
    <section className="experience">
      <div className="section-inner experience-content">
        <div className="timeline-line"></div>
        <div className="experience-timeline">
          {items.map((exp, i) => (
            <div className={`experience-item${i === 0 ? ' current' : ''}`} key={exp.company}>
              <div className="timeline-node"></div>
              <div className="experience-card">
                <div className="card-header">
                  <div className="company-logo">
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div className="card-title">
                    <div className="job-title">{exp.title}</div>
                    <div className="company-name">{exp.company}</div>
                  </div>
                </div>
                <div className="experience-period">{exp.period}</div>
                <div className="card-description">
                  {(exp.points || []).map((point, p) => (
                    <p key={p}>• {point}</p>
                  ))}
                </div>
                {(exp.tags || []).length > 0 && (
                  <div className="skills-tags">
                    {exp.tags.map((tag) => (
                      <span className="skill-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
