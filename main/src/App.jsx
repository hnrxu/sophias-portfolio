import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import "./App.css";

export default function App() {
  const visible = projects;

  return (
    <div className="portfolio">
      <header className="hero">
        <p className="hero-tag"> portfolio</p>
        <h1 className="hero-name">
          sophia xu's<br />
          <span className="hero-name-accent">projects</span>
        </h1>
        <span className="hero-sub">
          second year cs student at UBC
        </span>

      </header>

      <p className="section-label">SOME OF MY WORK</p>

      <div className="grid">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <footer className="footer">
        <a href="mailto:sxu.sophia@gmail.com" className="cta-btn">
          get in touch
        </a>
      </footer>
    </div>
  );
}