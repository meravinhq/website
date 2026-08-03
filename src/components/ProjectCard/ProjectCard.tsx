import type { Project } from "../../types/project";

import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <article className="project-card">

      <div className="project-card__top">

        <span className="project-card__number">
          {(index + 1).toString().padStart(2, "0")}
        </span>

        <div className="project-card__info">

          <span className="project-card__category">
            {project.category}
          </span>

          <h2 className="project-card__title">
            {project.title}
          </h2>

          <p className="project-card__description">
            {project.description}
          </p>

          <div className="project-card__tech">

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="project-card__tag"
              >
                {tech}
              </span>
            ))}

          </div>

          <a
            href={`/projects/${project.slug}`}
            className="project-card__link"
          >
            View Project →
          </a>

        </div>

      </div>

      <div className="project-card__image">

        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
        />

      </div>

    </article>
  );
}