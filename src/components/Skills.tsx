import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vue.js"],
      gradient: "gradient-primary"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      gradient: "gradient-accent"
    },
    {
      title: "Tools & Deployment",
      skills: ["Docker", "AWS", "Vercel", "Git", "Figma", "Supabase"],
      gradient: "gradient-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks I use to build 
            exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-smooth">
              <CardHeader className="text-center pb-6">
                <div className={`w-12 h-12 ${category.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{category.title[0]}</span>
                </div>
                <CardTitle className="text-xl font-outfit">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always learning and staying up-to-date with the latest technologies and best practices 
            in the ever-evolving world of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;