import imageself from "../../assets/profile.png";
import Resume from "../../assets/Tarun_Resume.pdf";

export default function Herosection() {
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
            Hi, I’m <span className="text-primary">Tarun</span>
          </h1>

          <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground">
            Frontend / MERN Stack Developer
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-md lg:max-w-lg">
            I build modern, responsive, and scalable web applications using
            React, Tailwind CSS, and modern UI libraries like shadcn.
          </p>

          <div className="flex gap-3 md:gap-4">
            <a
              href="mailto:vaghelatarun90@gmail.com?subject=Hiring%20Inquiry"
              className="bg-primary text-primary-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-md hover:bg-primary/90 transition"
            >
              Hire Me
            </a>

            <a
              download
              href={Resume}
              className="border border-border px-5 md:px-6 py-2.5 md:py-3 rounded-md hover:bg-muted transition"
            >
              Download CV
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
