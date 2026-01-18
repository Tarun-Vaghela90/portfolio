import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const companyExpCard = [
  {
    CompanyName: "Wings Tech Solutions Pvt. Ltd.",
    Role: "Junior Software Engineer",
    EmploymentType: "Full-Time",
    StartDate: "01/10/2025",
    EndDate: "Present",
    Location: "Rajkot",
    LocationType: "On-Site",
    SkillBadge: ["AngularJS", "PHP", "SQL", "REST APIs"],

    Description:
      "Working on enterprise web applications, handling bug fixes, feature enhancements, and client-requested updates in AngularJS and PHP-based systems. Collaborating with senior developers to understand existing codebases, ensure stability, and deliver reliable production changes.",

    Projects: [],
  },

  {
    CompanyName: "Wings Tech Solutions Pvt. Ltd.",
    Role: "Software Engineer Trainee (React & Node)",
    EmploymentType: "Trainee",
    StartDate: "01/07/2025",
    EndDate: "30/09/2025",
    Location: "Rajkot",
    LocationType: "On-Site",
    SkillBadge: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "Sequelize",
      "Redux",
      "JWT",
    ],

    Description:
      "Completed structured training focused on modern full-stack development using React and Node.js. Built multiple MERN-based applications to understand authentication, RESTful APIs, state management, database design, and role-based access control.",

    Projects: [
      {
        name: "Task Management System",
        summary:
          "Developed a Kanban-style task management system with role-based access, REST APIs, and SQL-backed persistence.",
        TechStack: ["React", "Node.js", "Express", "Sequelize", "SQL", "Redux"],
      },
      {
        name: "TownTrade – OLX-like Marketplace",
        summary:
          "Built a full-stack marketplace platform with user authentication, product listings, and MongoDB-based data modeling.",
        TechStack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      },
      {
        name: "AI RAG Chatbot",
        summary:
          "Implemented an AI-powered chatbot using embeddings and vector search for document-based question answering.",
        TechStack: [
          "React",
          "Node.js",
          "MongoDB",
          "MongoDB Vector Search",
          "Gemini API",
          "Redis",
        ],
      },
    ],
  },
];

export default function WorkExp() {
  const formatDate = (dateString) => {
    if (dateString === "Present") return "Present";

    const [day, month, year] = dateString.split("/");
    const date = new Date(year, month - 1, day);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <section className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-muted-foreground text-base md:text-lg">
            Technologies & Projects I work with
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {companyExpCard.map((exp, index) => (
            <Card
              key={index}
              className="
                bg-muted/40 border-muted
                p-6 md:p-8
                transition-all duration-300
                hover:border-primary/40
                hover:shadow-lg
              "
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Company & Role Info */}
                <div>
                  {/* Company Header */}
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.Role}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {exp.CompanyName}
                      </p>
                    </div>

                    {/* Employment Badge */}
                    <Badge variant="outline" className="self-start">
                      {exp.EmploymentType}
                    </Badge>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {exp.Description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(exp.StartDate)} - {formatDate(exp.EndDate)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {exp.Location} ({exp.LocationType})
                      </span>
                    </div>
                  </div>

                  {/* Skills/Technologies */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.SkillBadge.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Projects */}
                <div>
                  {exp.Projects.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-primary"></div>
                        Key Projects
                      </h4>
                      <div className="space-y-3">
                        {exp.Projects.map((project, idx) => (
                          <Card
                            key={idx}
                            className="
                              bg-gradient-to-br from-background/60 to-background/40
                              border-muted/60
                              p-4
                              transition-all duration-300
                              hover:border-primary/50
                              hover:shadow-md hover:shadow-primary/5
                              hover:-translate-x-1
                              group
                            "
                          >
                            <div className="flex items-start justify-between mb-3">
                              <h5 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                                {project.name}
                                <p className="text-xs text-muted-foreground mt-1">
                                  {project.summary}
                                </p>
                              </h5>

                              <div className="h-2 w-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors flex-shrink-0 mt-1"></div>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {project.TechStack.map((tech, techIdx) => (
                                <Badge
                                  key={techIdx}
                                  variant="outline"
                                  className="text-xs py-0 px-2 border-muted/60 hover:border-primary/40 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
