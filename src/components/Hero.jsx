import { ArrowDownRight, Download, Github, Linkedin } from 'lucide-react'
const resumeUrl = `${import.meta.env.BASE_URL}VICTOR'S FRESUME.docx`
function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Computer Science · Data · Cloud</p>

          <h1>
            I build useful digital products with <span>data and code.</span>
          </h1>

          <p className="hero-description">
            I’m Victor Enejo, a developer and data enthusiast. I enjoy building digital products that solve real-world problems and make life easier for people. I’m currently exploring roles across software, data, cloud and technical support.  
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects <ArrowDownRight size={18} />
            </a>
            <a className="button button-secondary" href={resumeUrl} download>
              Résumé <Download size={17} />
            </a>
          </div>

          <div className="social-links" aria-label="Social links">
            <a href="https://github.com/Enejo-vic" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={19} />
            </a>
            <a href="https://www.linkedin.com/in/enejo-victor-0b2078317" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={19} />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile image placeholder">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="image-frame">
            <img src="/profile-photo.jpg" alt="Replace this placeholder with Victor Enejo" />
          </div>
          <div className="floating-card floating-card-one">
            <strong>4+</strong>
            <span>Featured projects</span>
          </div>
          <div className="floating-card floating-card-two">
            <span className="status-dot" />
            Open to opportunities
          </div>
        </div>
      </div>

      <div className="intro-strip" id="about">
        <p>Currently exploring roles across software, data, cloud and technical support.</p>
        <a href="#contact">Start a conversation →</a>
      </div>
    </section>
  )
}

export default Hero
