import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-10">

        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Open to full-time, remote, and international opportunities.
            Feel free to reach out for roles, collaborations, or discussions.
          </p>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Email
          </p>

          <a
            href="mailto:vaghelatarun90@gmail.com"
            className="text-primary font-medium text-base hover:underline"
          >
            vaghelatarun90@gmail.com
          </a>

          <div className="pt-4">
            <Button asChild size="sm" className="gap-2">
              <a href="mailto:vaghelatarun90@gmail.com">
                <FaEnvelope className="w-3.5 h-3.5" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 pt-6">
          <a
            href="https://github.com/Tarun-Vaghela90"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <FaGithub className="w-7 h-7 md:w-8 md:h-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/tarun-vaghela"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <FaLinkedin className="w-7 h-7 md:w-8 md:h-8" />
          </a>
        </div>

        {/* Footer hint */}
        <p className="text-[11px] text-muted-foreground pt-6">
          Usually replies within 24 hours · Async friendly
        </p>

      </div>
    </section>
  );
}
