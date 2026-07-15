import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="projects-section container" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>

          <h2>
            Projects that show how I think and build.
          </h2>
        </div>

        <p>
          A selection of responsive web applications and user interfaces I
          have developed using React, JavaScript and modern front-end
          technologies.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-stack">
              {project.stack.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <a
              href={project.href}
              target={project.href === '#' ? undefined : '_blank'}
              rel={project.href === '#' ? undefined : 'noreferrer'}
              aria-label={`View ${project.title}`}
            >
              <span>View project</span>
              <ArrowUpRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects