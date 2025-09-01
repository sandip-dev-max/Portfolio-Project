import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 hero-gradient opacity-90" />

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-outfit tracking-tight">
            <span className="text-gradient">Sandip Bhatta</span>
            <br />
            Full-Stack Developer
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Building modern web applications with clean code & creative design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gradient-primary hover:shadow-glow transition-smooth font-medium"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
              onClick={() => scrollToSection("contact")}
            >
              <span>Contact Me</span>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/sandip-dev-max"
              className="text-muted-foreground hover:text-accent transition-smooth p-2 hover:shadow-glow rounded-full"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandipbhatta-dev/"
              className="text-muted-foreground hover:text-accent transition-smooth p-2 hover:shadow-glow rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sandipbhatta477@example.com"
              className="text-muted-foreground hover:text-accent transition-smooth p-2 hover:shadow-glow rounded-full"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-accent transition-smooth animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
