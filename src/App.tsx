import './App.css'

function App() {
  const projects = [
    {
      title: 'hockey-agent',
      description: 'Ett projekt som jag genomförde tillsammans med en kurskamrat i kursen "ID2223 Skalbar maskininlärning och djupinlärning". Vi utvecklade en agent som kunde besvara NHL-relaterade frågor med hjälp av funktioner som hämtade data från en feature store. Projektet använder GitHub Actions för att uppdatera statistiken dagligen, men eftersom dessa arbetsflöden stängs av när repot är inaktivt är statistiken för närvarande inte uppdaterad.',
      tech: ['Hopsworks', 'Python', 'Pandas'],
      link: 'https://github.com/jacobb260/hockey-agent',
    },
    {
      title: 'Transfer Learning',
      description: 'Ett projekt som jag genomförde tillsammans med två andra kurskamrater i kursen "DD2424 Djupinlärning i Data Science". Vi använde transfer learning på Oxford-IIIT Pet Dataset för att klassificera både katter och hundar samt olika djurraser. I projektet jämförde vi flera strategier för finjustering och analyserade hur metoder som data augmentation och weighted loss påverkade modellens prestanda.',
      tech: ['Python', 'PyTorch', 'ResNet', 'Transfer Learning'],
      link: 'https://drive.google.com/drive/folders/1Ti-h6FeYv9nasQFDwQxmEAb4Gp9XUWRq?usp=sharing',
    },
    {
      title: 'Projekt 3',
      description: 'Lyft gärna fram resultat, design eller funktioner.',
      tech: ['React', 'JavaScript', 'HTML'],
      link: '#',
    },
  ]

  return (
    <div className="page">
      <header className="header">
        <div className="container nav">
          <a href="#top" className="logo">Jacob Lindström Bjäreklint</a>

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
              <p className="eyebrow">Civilingenjörsstudent • KTH/ Portfolio</p>
              <h1>Hej!</h1>
              <p className="hero-text">
                Jag heter Jacob Lindström Bjäreklint och studerar till civilingenjör inom medietekink.
                Här visar jag upp mina projekt, min erfarenhet och mitt CV.
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
                <li>📍 Stockholm, Sverige</li>
                <li>💼 Civilingenjörsstudent</li>
                <li>🎯 Söker: praktik / jobb </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container narrow">
            <h2>Om mig</h2>
            <p className="section-text">
              Jag heter Jacob Lindström Bjäreklint och är 28 år. Jag studerar till civilingenjör inom Medieteknik 
              och läser en master i datalogi med inriktning mot dataanalys - maskininlärning. Mitt största intresse är AI och maskininlärning,
               men jag är även intresserad av andra områden, såsom frontend- och backendutveckling.
            </p>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <h2>Projekt</h2>
            <p className="section-text">
              Nedan följer några av de projekt jag har arbetat med under min tid på KTH.
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