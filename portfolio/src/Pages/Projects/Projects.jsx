import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Admission Registration Portal",
      description:
        "Full-stack MERN application with admin panel, document uploads, and application tracking.",
      tech: "React • Node • MongoDB • Express",
      github: "https://github.com/Tarun-Vaghela90/Admission-Registration-Portal",
    },
    {
      title: "AI Powered Personal Expense Tracker",
      description:
        "Smart expense tracking app with AI-based spending insights using Gemini API.",
      tech: "React • Node • MongoDB • Gemini API",
      github: "https://github.com/Tarun-Vaghela90/AI-Powered-Personal-Expense-Tracker",
    },
    {
      title: "Taskflow - Task Management App",
      description:
        "Kanban-style task manager with drag-and-drop workflow and SQL-backed persistence.",
      tech: "React • Express • Sequelize • SQL",
      github: "https://github.com/Tarun-Vaghela90/taskflow",
    },
    {
      title: "Towntrade",
      description:
        "OLX-like marketplace platform for listing and selling second-hand items.",
      tech: "React • MERN",
      github: "https://github.com/Tarun-Vaghela90/towntrade",
    },
  ];

  return (
    <section className="min-h-screen bg-background text-foreground flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* HEADER */}
        <div className="space-y-5 md:space-y-6 lg:space-y-7 mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-md lg:max-w-lg">
            A curated selection of projects highlighting my frontend and
            full-stack development experience.
          </p>
        </div>

        {/* SCROLL WRAPPER */}
        <div className="relative">
          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-background/90 via-background/60 to-transparent" />

          {/* SCROLL AREA */}
          <div
            className="
              flex gap-3 md:gap-4
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              pb-4
              px-2
              pr-10
              scroll-pl-2
              scroll-pr-10
              [&::-webkit-scrollbar]:hidden
            "
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="
                  flex-none
                  snap-start
                  w-[85%]
                  md:w-[50%]
                  lg:w-[33.333%]
                  xl:w-[25%]
                  bg-card
                  border border-border
                  transition
                  hover:bg-muted
                  flex flex-col
                "
              >
                <CardHeader className="space-y-1">
                  <CardTitle className="text-lg line-clamp-1">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.tech}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4">
                    <Button
                      variant="outline"
                      className="w-full border border-border px-5 md:px-6 py-2.5 md:py-3 rounded-md hover:bg-muted transition"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Source
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}