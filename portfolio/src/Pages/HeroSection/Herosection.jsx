import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Herosection() {
  const imageself = "profile.png";
  const Resume = "Tarun_Resume.pdf";

  return (
    <section className="min-h-screen bg-background text-foreground flex items-center">
      <div
        className="
          max-w-6xl mx-auto px-6
          grid grid-cols-1 md:grid-cols-2
          gap-6 md:gap-10 lg:gap-16
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="space-y-5 md:space-y-6 lg:space-y-7">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-primary">Tarun Vaghela</span>
          </h1>

          <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground">
            Junior Software Engineer • MERN Stack (React & Node)
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-md lg:max-w-lg">
            Junior Software Engineer focused on building secure MERN
            applications. Currently working on enterprise systems, with hands-on
            MERN experience gained through structured training and project-based
            development.
          </p>

          <div className="flex gap-3 md:gap-4">
            <a
              href="mailto:vaghelatarun90@gmail.com?subject=Opportunity%20Discussion"
              className="bg-primary text-primary-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-md hover:bg-primary/90 transition"
            >
              Get in Touch
            </a>

            <a
              download="Tarun_Vaghela.pdf"
              href={Resume}
              className="border border-border px-5 md:px-6 py-2.5 md:py-3 rounded-md hover:bg-muted transition"
            >
              Download Resume
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            Open to remote & international opportunities
          </p>
          <div className="flex items-center gap-5 mt-4">
            <a
              href="https://github.com/Tarun-Vaghela90"
              target="_blank"
              title="GitHub"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/tarun-vaghela"
              target="_blank"
              title="LinkedIn"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-center">
          <img
            src={imageself}
            alt="Developer"
            className="
              w-48 h-48
              md:w-64 md:h-64
              lg:w-80 lg:h-80
              object-cover
              rounded-2xl
            "
          />
        </div>
      </div>
    </section>
  );
}
