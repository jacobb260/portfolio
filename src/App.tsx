import './App.css'
import hockeyAgentImg from './assets/hockey-agent.png'
import transferLearning from './assets/transfer-learning.png'
import wineQuality from './assets/wine-quality.png'

function App() {
  const projects = [
    {
      title: 'Hockey-Agent',
      description: 'Ett projekt som jag genomförde tillsammans med en kurskamrat i kursen "ID2223 Skalbar maskininlärning och djupinlärning". Vi utvecklade en agent som kunde besvara NHL-relaterade frågor med hjälp av funktioner som hämtade data från en feature store. Projektet använder GitHub Actions för att uppdatera statistiken dagligen, men eftersom dessa arbetsflöden stängs av när repot är inaktivt är statistiken för närvarande inte uppdaterad.',
      tech: ['Hopsworks', 'Python', 'Pandas'],
      link: 'https://github.com/jacobb260/hockey-agent',
      image: hockeyAgentImg,
    },
    {
      title: 'Transfer Learning',
      description: 'Ett projekt som jag genomförde tillsammans med två andra kurskamrater i kursen "DD2424 Djupinlärning i Data Science". Vi använde transfer learning på Oxford-IIIT Pet Dataset för att klassificera både katter och hundar samt olika djurraser. I projektet jämförde vi flera strategier för finjustering och analyserade hur metoder som data augmentation och weighted loss påverkade modellens prestanda.',
      tech: ['Python', 'PyTorch', 'ResNet', 'Transfer Learning'],
      link: 'https://drive.google.com/drive/folders/1Ti-h6FeYv9nasQFDwQxmEAb4Gp9XUWRq?usp=sharing',
      image: transferLearning,
    },
    {
      title: 'Wine Quality Classification',
      description: 'Ett projekt som jag genomförde tillsammans med tre andra kurskamrater i kursen "DM1590 Maskininlärning för medieteknik". Kursen var min första introduktion till maskininlärning och lästes under årskurs 2. I projektet använde vi flera klassiska maskininlärningsalgoritmer för att klassificera viner utifrån ett antal givna features.',
      tech: ['Python', 'scikit-learn', 'Machine Learning', 'Classification'],
      link: 'https://drive.google.com/drive/folders/1rdfGoaWnfx4OMHqJhPY_ZxyGumpbLoZM?usp=drive_link',
      image: wineQuality,
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
                  <img src={project.image} alt={project.title} className="project-image" />
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

              <a href="CV-Jacob-Lindstrom-Bjareklint.pdf" className="btn btn-primary">Ladda ner CV</a>
            </div>

            <div className="card">

              <div className="cv-block">
                <h3>Utbildning</h3>
                <p><strong>Kungliga Tekniska Högskolan</strong> - Civilingenjör i Medieteknik</p>
                <p>2021 - Pågående </p>
                <p>Master i datalogi med inriktning mot dataanalys</p>
              </div>

              <div className="cv-block">
                <h3>Teknisk erfarenhet</h3>
                <div className="tech-list">
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">Java</span>
                  <span className="tech-pill">JavaScript</span>
                  <span className="tech-pill">TypeScript</span>
                  <span className="tech-pill">React</span>
                  <span className="tech-pill">SQL</span>
                  <span className="tech-pill">Machine Learning</span>
                  <span className="tech-pill">Deep Learning</span>
                  <span className="tech-pill">Data Analysis</span>
                  <span className="tech-pill">Git</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <h2>Kontakt</h2>

            <div className="contact-links">
              <a href="mailto:jacob.lindstrombjareklint@gmail.com" className="contact-link">jacob.lindstrombjareklint@gmail.com</a>
              <a href="https://www.linkedin.com/in/jacob-lindstr%C3%B6m-bj%C3%A4reklint-32b901266/" className="contact-link">LinkedIn</a>
              <a href="https://github.com/jacobb260" className="contact-link">GitHub</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App