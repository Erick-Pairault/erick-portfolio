import "../App.css";

export default function Home() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-left">
        <p className="eyebrow">Software Engineer</p>

        <h1>
          Building sleek, scalable, <br />
          and user-focused applications.
        </h1>

        <p className="hero-description">
          I’m Erick — a developer focused on full-stack applications, data
          systems, mobile development, and modern UI design.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            className="secondary-btn"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="tech-sections">
        <div className="skills-box">
          <h2>Coding Languages</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              <span>Java</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              <span>Python</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <span>JavaScript</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" />
              <span>Dart</span>
            </div>
          </div>
        </div>

        <div className="skills-box">
          <h2>Frameworks & Development</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <span>React</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
              <span>Flutter</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <span>Node.js</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
              <span>Firebase</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" />
              <span>Vite</span>
            </div>
          </div>
        </div>

        <div className="skills-box">
          <h2>Tools & Platforms</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              <span>MongoDB</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
              <span>Docker</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              <span>Git</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
              <span>PostgreSQL</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
              <span>Linux</span>
            </div>

            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" />
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
