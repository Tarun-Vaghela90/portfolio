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
      github:
        "https://github.com/Tarun-Vaghela90/AI-Powered-Personal-Expense-Tracker",
    },
    {
      title: "Taskflow – Task Management App",
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
    <section className="bg-background text-foreground py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-10 space-y-3 md:space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="hidden sm:block text-muted-foreground max-w-lg">
            Selected projects showcasing frontend and full-stack experience.
          </p>
        </div>

        {/* PROJECT GRID (AUTO ADJUST) */}
        <div
          className="
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="
                bg-card
                border border-border
                flex flex-col
                transition
                hover:shadow-lg
                hover:-translate-y-1
              "
            >
              {/* HEADER */}
              <CardHeader className="pb-3">
                <CardTitle className="text-sm sm:text-base md:text-lg line-clamp-2">
                  {project.title}
                </CardTitle>

                {/* TECH — hidden on mobile */}
                <CardDescription className="hidden sm:block text-xs md:text-sm">
                  {project.tech}
                </CardDescription>
              </CardHeader>

              {/* CONTENT */}
              <CardContent className="flex flex-col flex-1">
                {/* DESCRIPTION — only desktop */}
                <p className="hidden lg:block text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto pt-4">
                  <Button
                    variant="outline"
                    className="w-full text-xs sm:text-sm"
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
    </section>
  );
}
