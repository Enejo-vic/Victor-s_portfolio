import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="projects-section container" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>

          <h2>Projects that show how I think and build.</h2>
        </div>

        <p>
          A selection of responsive web applications and interfaces developed
          with React, JavaScript and modern front-end technologies.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            
            {/* PROJECT IMAGE */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-image"
                aria-label={`Open live ${project.title} project`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />

                <div className="project-image-overlay">
                  <span>
                    View Live Project
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </a>
            ) : (
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </div>
            )}

            {/* PROJECT CONTENT */}
            <div className="project-content">
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

              {/* TECHNOLOGIES */}
              <div className="project-stack">
                {project.stack.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <ArrowUpRight size={17} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                    <Github size={17} />
                  </a>
                )}

                {!project.liveUrl && !project.githubUrl && (
                  <span className="project-status">
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects