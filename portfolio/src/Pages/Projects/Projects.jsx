import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "Admission Registration Portal",
      description:
        "Full-stack MERN application with admin panel, document uploads, and application tracking.",
      tech: "React • Node • MongoDB",
      image: "/project1.png",
    },
    {
      title: "College Finder App",
      description:
        "Search and explore colleges using Maps API with responsive UI.",
      tech: "React • Tailwind • API",
      image: "/project2.png",
    },
    {
      title: "Admin Dashboard",
      description:
        "Analytics dashboard with charts, tables, and role-based access.",
      tech: "React • shadcn",
      image: "/project3.png",
    },
    {
      title: "Portfolio Website",
      description:
        "Dark-mode developer portfolio built with shadcn and Tailwind.",
      tech: "React • Tailwind",
      image: "/project4.png",
    },
    {
      title: "Task Management App",
      description:
        "Kanban-style task manager with drag-and-drop workflow.",
      tech: "React • MERN",
      image: "/project5.png",
    },
  ];

  return (
    <section className="py-20 bg-background">
      {/* SECTION HEADER (NORMAL WIDTH) */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured <span className="text-primary">Projects</span>
        </h2>
      </div>

      {/* SCROLL AREA (EDGE-LESS, NO LINES, NO BOX) */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="
              flex gap-8
              overflow-x-auto
              scroll-smooth
              px-6
              pb-6
              -mx-6
              [&::-webkit-scrollbar]:hidden
            "
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="
                  min-w-[90%]
                  sm:min-w-[60%]
                  md:min-w-[45%]
                  lg:min-w-[32%]
                  xl:min-w-[24%]
                  bg-card
                  border-border
                  hover:bg-muted
                  transition
                "
              >
                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover rounded-t-lg border-b border-border"
                />

                <CardHeader>
                  <CardTitle className="text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.tech}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
