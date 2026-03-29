import './App.css'

function App() {
  const projects = [
    {
      title: 'Projekt 1',
      description: 'Kort beskrivning av projektet, vad du byggde och vilken nytta det gav.',
      tech: ['React', 'CSS', 'Firebase'],
      link: '#',
    },
    {
      title: 'Projekt 2',
      description: 'Beskriv problemet, din lösning och vad du lärde dig.',
      tech: ['TypeScript', 'Node.js', 'API'],
      link: '#',
    },
    {
      title: 'Projekt 3',
      description: 'Lyft gärna fram resultat, design eller funktioner.',
      tech: ['React', 'JavaScript', 'HTML'],
      link: '#',
    },
  ]

  const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML', 'CSS', 'Git']

  return (
    <div className="page">
      <header className="header">
        <div className="container nav">
          <a href="#top" className="logo">Ditt Namn</a>

          <nav className="nav-links">
            <a href="#about">Om mig</a>
            <a href="#projects">Projekt</a>
            <a href="#cv">CV</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Frontendutvecklare / Portfolio</p>
              <h1>Hej, jag heter Ditt Namn och bygger moderna webbapplikationer.</h1>
              <p className="hero-text">
                Här visar jag upp mina projekt, min erfarenhet och mitt CV.
                Den här sidan är en bra grund att vidareutveckla med egna färger,
                bilder och innehåll.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">Se mina projekt</a>
                <a href="#cv" className="btn btn-secondary">Läs mitt CV</a>
              </div>
            </div>

            <div className="card intro-card">
              <div className="image-placeholder"></div>
              <h2>Snabb fakta</h2>
              <ul className="facts-list">
                <li>📍 Stad, Land</li>
                <li>💼 Roll eller titel</li>
                <li>🛠 Fokus: React, UI, frontend</li>
                <li>🎯 Söker: praktik / jobb / frilans</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container narrow">
            <h2>Om mig</h2>
            <p className="section-text">
              Skriv här en kort presentation om vem du är, vad du gillar att bygga
              och vilken typ av roller eller projekt du är intresserad av.
            </p>

            <div className="skills">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <h2>Projekt</h2>
            <p className="section-text">
              Visa de projekt du är mest stolt över. För varje projekt är det bra att
              beskriva problemet, lösningen, teknikerna och länkar till demo eller GitHub.
            </p>

            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="card project-card">
                  <div className="project-image"></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((item) => (
                      <span key={item} className="tech-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} className="project-link">Visa projekt</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cv" className="section">
          <div className="container cv-grid">
            <div>
              <h2>CV</h2>
              <p className="section-text">
                Här kan du sammanfatta din utbildning, erfarenhet och tekniska kompetens.
                Du kan också lägga till en knapp för att ladda ner ett PDF-CV.
              </p>

              <a href="#" className="btn btn-primary">Ladda ner CV</a>
            </div>

            <div className="card">
              <div className="cv-block">
                <h3>Erfarenhet</h3>
                <p>Företag / Roll / År</p>
                <p>Kort beskrivning av vad du gjorde och vilket ansvar du hade.</p>
              </div>

              <div className="cv-block">
                <h3>Utbildning</h3>
                <p>Skola / Program / År</p>
              </div>

              <div className="cv-block">
                <h3>Övrigt</h3>
                <p>Certifikat, språk, GitHub, LinkedIn eller annat relevant.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <h2>Kontakt</h2>
            <p className="section-text contact-text">
              Gör det enkelt att nå dig. Lägg till e-post, LinkedIn, GitHub och ett kort
              meddelande om att du är öppen för möjligheter.
            </p>

            <div className="contact-links">
              <a href="mailto:dinmail@example.com" className="contact-link">dinmail@example.com</a>
              <a href="#" className="contact-link">LinkedIn</a>
              <a href="#" className="contact-link">GitHub</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App