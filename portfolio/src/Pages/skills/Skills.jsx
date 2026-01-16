import React from "react";
import { Card } from "@/components/ui/card";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tech Stack
          </h2>
          <p className="mt-2 text-muted-foreground text-base md:text-lg">
            Tools & technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            xl:grid-cols-5
            gap-3 sm:gap-4 md:gap-5
          "
        >
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="
                aspect-square
                flex flex-col items-center justify-center
                bg-muted/40 border-muted
                transition-all duration-300
                hover:scale-[1.02]
                hover:border-primary/40
              "
            >
              <div className="text-3xl md:text-4xl mb-2 text-primary">
                {skill.icon}
              </div>
              <p className="text-xs md:text-sm font-medium">
                {skill.name}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
