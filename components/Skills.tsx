"use client";

import {
  FiTerminal,
  FiCode,
  FiCoffee,
  FiDatabase,
  FiGlobe,
  FiServer,
  FiLayers,
} from "react-icons/fi";

export default function Skills() {
  const skills = [
    { name: "Vim", icon: FiTerminal },
    { name: "Linux", icon: FiTerminal },
    { name: "Java", icon: FiCoffee },
    { name: "Python", icon: FiCode },
    { name: "Spring Boot", icon: FiLayers },
    { name: "JPA/Hibernate", icon: FiDatabase },
    { name: "Microservices", icon: FiServer },
    { name: "TypeScript", icon: FiCode },
    { name: "React", icon: FiCode },
    { name: "Next.js", icon: FiGlobe },
    { name: "MySQL", icon: FiDatabase },
    { name: "PostgreSQL", icon: FiDatabase },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center space-y-3 rounded-lg bg-card p-6 transition duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-sm motion-reduce:transform-none"
          >
            <skill.icon className="h-8 w-8 text-primary" />
            <span className="font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
