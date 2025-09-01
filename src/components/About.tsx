import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a keen eye for design and a love for creating 
            seamless digital experiences that combine functionality with beautiful aesthetics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-card border-border shadow-card hover:shadow-glow transition-smooth group">
            <CardContent className="p-8 text-center">
              <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-smooth">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-outfit">Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clean, efficient code using modern frameworks like React, TypeScript, and Node.js 
                to build scalable applications.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border shadow-card hover:shadow-glow transition-smooth group">
            <CardContent className="p-8 text-center">
              <div className="gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-smooth">
                <Palette className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-outfit">Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                User-centered design approach with attention to detail, creating intuitive 
                interfaces that users love to interact with.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border shadow-card hover:shadow-glow transition-smooth group">
            <CardContent className="p-8 text-center">
              <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-smooth">
                <Rocket className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-outfit">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Always exploring new technologies and methodologies to deliver cutting-edge 
                solutions that push boundaries.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over <span className="text-accent font-semibold">5 years</span> of experience in web development, 
            I've had the privilege of working with startups and established companies to bring their digital 
            visions to life. I believe in the power of technology to solve real-world problems and create 
            meaningful connections between people and brands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;