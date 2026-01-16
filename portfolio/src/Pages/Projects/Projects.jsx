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
      tech: "React • Node • MongoDB • Express ",
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
    <section className="py-20 bg-background text-foreground h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
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
              flex gap-6
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
                  transition-all
                  hover:bg-muted
                  hover:shadow-lg
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
                    <Button variant="outline" className="w-full" asChild>
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
