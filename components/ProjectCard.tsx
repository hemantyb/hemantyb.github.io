"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div>
      <Card
        className="cursor-pointer h-full transition duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 motion-reduce:transform-none"
        onClick={() => onClick(project)}
      >
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{project.shortDescription}</p>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2 justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
