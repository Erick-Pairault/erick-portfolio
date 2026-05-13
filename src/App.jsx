import Navbar from "./components/Navbar";

const projects = [
  {
    title: "YouTube Data Analyzer",
    description:
      "A desktop analytics app using Python, MongoDB, PyQt5, and Spark to analyze YouTube video data.",
    tech: ["Python", "MongoDB", "Spark", "PyQt5"],
    github: "#",
  },
  {
    title: "Sports Position Predictor",
    description:
      "A Flutter/Firebase app with a machine learning endpoint that recommends sports positions based on user data.",
    tech: ["Flutter", "Firebase", "Flask", "ML"],
    github: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "A sleek React and Vercel portfolio website showcasing skills, projects, and professional links.",
    tech: ["React", "Vite", "Vercel"],
    github: "#",
  },
];

const skills = [
  "React",
  "JavaScript",
  "Python",
  "SQL",
  "MongoDB",
  "Firebase",
  "Flutter",
  "HTML",
  "CSS",
  "Git",
];

export default function App() {
  return (
    <>
      <Navbar />
      <main className="page">
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="eyebrow">Software Developer</p>
            <h1>Hi, I’m Erick.</h1>
            <p className="hero-text">
              I’m building this with React and Vercel.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                View Projects
              </a>
              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="" target="_blank">
                GitHub
              </a>
              <a href="" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
