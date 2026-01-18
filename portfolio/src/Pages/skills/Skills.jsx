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
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiAngular, SiMysql } from "react-icons/si";

const primaryStack = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

const professionalExposure = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "SQL", icon: <FaDatabase/> },
  { name: "AngularJS", icon: <SiAngular/> },
  { name: "PHP", icon: <FaPhp/> },
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
        {/* Primary Stack */}
<div className="mb-16">
  <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
    Primary Stack (MERN)
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {primaryStack.map((skill) => (
      <Card key={skill.name} className="aspect-square flex flex-col items-center justify-center bg-muted/40">
        <div className="text-4xl text-primary mb-2">
          {skill.icon}
        </div>
        <p className="text-sm font-medium">{skill.name}</p>
      </Card>
    ))}
  </div>
</div>

{/* Professional Exposure */}
<div>
  <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
    Professional & Enterprise Exposure
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {professionalExposure.map((skill) => (
      <Card key={skill.name} className="aspect-square flex flex-col items-center justify-center bg-muted/40">
        {skill.icon && (
          <div className="text-3xl text-primary mb-2">
            {skill.icon}
          </div>
        )}
        <p className="text-sm font-medium">{skill.name}</p>
      </Card>
    ))}
  </div>
</div>


      </div>
    </section>
  );
}
