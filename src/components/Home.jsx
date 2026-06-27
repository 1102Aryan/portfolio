import { skillCategories } from '../data'

export default function Home() {
  return (
    <section className="home">
      <div className="section-inner glass-section">
        <div className="homecontent">
          <h1>Hello, I'm <span>Aryan</span></h1>
          <p>Software Engineer</p>
          <p>BSc Computer Science with Artificial - Final year at University of Nottingham</p>
          <div className="about">
            <span><i className="bx bx-map" style={{ marginRight: '0.5rem', color: '#ffffff' }}></i>Based in UK</span>
            <span><i className="bx bx-briefcase" style={{ marginRight: '0.5rem', color: '#ffffff' }}></i>1+ Years of work experience</span>
          </div>

          <a href="/resources/AryanSunil_CV.pdf" className="btn" target="_blank" rel="noreferrer">View CV</a>

          <h2>Technical Skills</h2>
          {skillCategories.map((category) => (
            <div className="category" key={category.title}>
              <h3>{category.title}</h3>
              <div className="skills-container">
                {category.skills.map((skill) => (
                  <div className={`skill-tag ${skill.cls}`} key={skill.name}>
                    <i className={skill.icon} title={skill.name}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
