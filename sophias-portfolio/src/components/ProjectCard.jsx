import { statusColors } from "../data/projects";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const { title, desc, tags, status, icon, accent, links } = project;
  const statusStyle = statusColors[status];

  return (
    <div className={styles.card}>
      <div className={styles.accent} style={{ background: accent }} />
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <span
          className={styles.status}
          style={{ background: statusStyle.bg, color: statusStyle.color }}
        >
          {status}
        </span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      {Object.keys(links).length > 0 && (
        <div className={styles.links}>
          {Object.entries(links).map(([label, href]) => (
            <a key={label} href={href} className={styles.link}>
              <span className={styles.dot} />
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}