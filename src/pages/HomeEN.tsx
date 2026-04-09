import '../App.css'
import hockeyAgentImg from '../assets/hockey-agent.png'
import transferLearning from '../assets/transfer-learning.png'
import wineQuality from '../assets/wine-quality.png'
import { Link } from 'react-router-dom'
function HomeEN() {
  const projects = [
    {
      title: 'Hockey-Agent',
      description: 'A project I carried out together with a coursemate as part of the course “ID2223 Scalable Machine Learning and Deep Learning”. We developed an agent capable of answering NHL-related questions using functions that retrieve data from a feature store. The project uses GitHub Actions to update statistics daily; however, since these workflows are disabled when the repository is inactive, the statistics are currently not up to date.',
      tech: ['Hopsworks', 'Python', 'Pandas'],
      link: 'https://github.com/jacobb260/hockey-agent',
      image: hockeyAgentImg,
    },
    {
      title: 'Transfer Learning',
      description: 'A project carried out together with two other coursemates as part of the course “DD2424 Deep Learning in Data Science”. We applied transfer learning on the Oxford-IIIT Pet Dataset to classify both cats and dogs, as well as different breeds. In the project, we compared several fine-tuning strategies and analyzed how techniques such as data augmentation and weighted loss affected the model’s performance.',
      tech: ['Python', 'PyTorch', 'ResNet', 'Transfer Learning'],
      link: 'https://drive.google.com/drive/folders/1Ti-h6FeYv9nasQFDwQxmEAb4Gp9XUWRq?usp=sharing',
      image: transferLearning,
    },
    {
      title: 'Wine Quality Classification',
      description: 'A project carried out together with three other coursemates as part of the course “DM1590 Machine Learning for Media Technology”. This course was my first introduction to machine learning and was taken during my second year of studies. In the project, we applied several classical machine learning algorithms to classify wines based on a set of given features.',
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
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#cv">CV</a>
            <a href="#contact">Contact Information</a>
          </nav>

          <nav className="lang-links">
            <Link to="/en">EN</Link>
            /
            <Link to="/">SV</Link>
          </nav>
          
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">MSc in Engineering Student • KTH/ Portfolio</p>
              <h1>Hello!</h1>
              <p className="hero-text">
                My name is Jacob Lindström Bjäreklint, and I am currently pursuing a Master of Science in Engineering in Media Technology at KTH, with a Master’s level specialization in Computer Science.
                Here you can explore my projects, experience, and CV.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View my projects</a>
                <a href="#cv" className="btn btn-secondary">View my CV</a>
              </div>
            </div>

            <div className="card intro-card">
              <div className="image-placeholder"></div>
              <h2>Quick facts</h2>
              <ul className="facts-list">
                <li>📍 Stockholm, Sweden</li>
                <li>💼 MSc in Engineering (Media Technology), Computer Science</li>
                <li>🎯 Seeking: internship / part-time roles </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container narrow">
            <h2>About me</h2>
            <p className="section-text">
              My name is Jacob Lindström Bjäreklint, and I am a 28-year-old Master of Science in Engineering 
              student in Media Technology, specializing in Computer Science with a focus on data analytics and machine learning.
              I am particularly interested in AI and machine learning, but I also enjoy working with other areas such as frontend 
              and backend development.
            </p>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <h2>Projects</h2>
            <p className="section-text">
              Here are some of the projects I have worked on during my studies at KTH.
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

                  <a href={project.link} className="project-link">Show project</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cv" className="section">
          <div className="container cv-grid">
            <div>
              <h2>CV</h2>

              <a href="CV-Jacob-Lindstrom-Bjareklint-En.pdf" className="btn btn-primary">Download CV</a>
            </div>

            <div className="card">

              <div className="cv-block">
                <h3>Education</h3>
                <p><strong>KTH Royal Institute of Technology</strong> - MSc in Engineering (Media Technology)</p>
                <p>2021 - Present </p>
                <p>Specialization in Computer Science, with a focus on Data Science</p>
              </div>

              <div className="cv-block">
                <h3>Technical Skills</h3>
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
            <h2>Contact Information</h2>

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

export default HomeEN