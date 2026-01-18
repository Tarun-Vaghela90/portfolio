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
          gap-[clamp(1.5rem,4vw,4rem)]
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="space-y-[clamp(1rem,2.5vw,1.75rem)]">
          <h1 className="font-bold leading-tight text-[clamp(2rem,5vw,3.2rem)]">
            Hi, I’m <span className="text-primary">Tarun Vaghela</span>
          </h1>

          <h2 className="text-muted-foreground text-[clamp(1rem,3vw,1.5rem)]">
            Junior Software Engineer · MERN Stack (React & Node)
          </h2>

          <p className="text-muted-foreground max-w-xl text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed">
            Junior Software Engineer focused on building secure MERN
            applications. Currently working on enterprise systems, with
            hands-on MERN experience gained through structured training and
            project-based development.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-[clamp(0.75rem,2vw,1rem)] pt-2">
            <a
              href="mailto:vaghelatarun90@gmail.com?subject=Opportunity%20Discussion"
              className="
                bg-primary text-primary-foreground
                px-[clamp(1.1rem,3vw,1.5rem)]
                py-[clamp(0.55rem,1.8vw,0.75rem)]
                rounded-md
                text-[clamp(0.85rem,2vw,1rem)]
                hover:bg-primary/90 transition
              "
            >
              Get in Touch
            </a>

            <a
              download="Tarun_Vaghela.pdf"
              href={Resume}
              className="
                border border-border
                px-[clamp(1.1rem,3vw,1.5rem)]
                py-[clamp(0.55rem,1.8vw,0.75rem)]
                rounded-md
                text-[clamp(0.85rem,2vw,1rem)]
                hover:bg-muted transition
              "
            >
              Download Resume
            </a>
          </div>

          {/* Availability */}
          <p className="flex items-center gap-2 text-muted-foreground text-[clamp(0.75rem,2vw,0.9rem)]">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Open to remote & international opportunities
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/Tarun-Vaghela90"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition"
            >
              <FaGithub className="w-[clamp(1.3rem,3vw,1.6rem)] h-[clamp(1.3rem,3vw,1.6rem)]" />
            </a>

            <a
              href="https://www.linkedin.com/in/tarun-vaghela"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition"
            >
              <FaLinkedin className="w-[clamp(1.3rem,3vw,1.6rem)] h-[clamp(1.3rem,3vw,1.6rem)]" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={imageself}
            alt="Tarun Vaghela"
            className="
              object-cover rounded-2xl
              w-[clamp(12rem,30vw,20rem)]
              h-[clamp(12rem,30vw,20rem)]
            "
          />
        </div>
      </div>
    </section>
  );
}
