"use client";

import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface PortfolioSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  title?: string;
  showAll?: boolean;
}

export default function PortfolioSection({
  projects,
  onProjectClick,
  title = "My Projects",
  showAll = true,
}: PortfolioSectionProps) {
  const displayProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {displayProjects.length === 0 ? (
        <p className="text-muted-foreground">No projects match your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
            />
          ))}
        </div>
      )}
    </section>
  );
}
