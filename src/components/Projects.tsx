import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SaaS Edtech Platform",
      description: "Multi-tenant SaaS platform built with Next.js, TypeScript, Redux Toolkit, and Node.js. Includes role-based access, payment integration, and scalable architecture for real-world SaaS businesses.",
      tech: ["Next.js", "Node.js", "MySQL", "Khalti"],
      githubUrl: "https://github.com/sandip-dev-max/Saas-Edtech.git",
      liveUrl: "https://github.com/sandip-dev-max/Saas-Edtech.git",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A full-stack task management system with authentication, team collaboration, and dashboard UI. Built using TypeScript, Express, Sequelize, and React with Vite.",
      tech: ["React.js", "TypeScript", "MySQL", "Tailwind"],
      githubUrl: "https://github.com/sandip-dev-max/focus-board.git",
      liveUrl: "https://github.com/sandip-dev-max/focus-board.git",
      featured: false
    },
    {
      title: "TheOriginTech",
      description: "TheOriginTech – An IT service provider company delivering web development, digital marketing, and software solutions.",
      tech: ["React", "Node.js", "MySQL"],
      githubUrl: "https://github.com/sandip-dev-max/TheOriginTech.git",
      liveUrl: "https://github.com/sandip-dev-max/TheOriginTech.git",
      featured: true
    },
    {
      title: "B2B platform",
      description: "Backend system for B2B platform with role-based authentication (Admin & Company users). ",
      tech: ["Node.js", "Express", "MYSQL", "Socket.io"],
      githubUrl: "https://github.com/sandip-dev-max/B2B-BackEnd.git",
      liveUrl: "https://github.com/sandip-dev-max/B2B-BackEnd.git",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border shadow-card hover:shadow-glow transition-smooth group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-outfit mb-2 group-hover:text-accent transition-smooth">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                  {project.featured && (
                    <Badge className="gradient-primary text-white">Featured</Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="gradient-primary hover:shadow-glow transition-smooth"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
            asChild
          >
            <a href="https://github.com/sandip-dev-max" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;