import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project and 
            discuss how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold font-outfit mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities, collaborations, and challenging projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:hello@example.com" 
                    className="text-muted-foreground hover:text-accent transition-smooth"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="gradient-accent w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-muted-foreground hover:text-accent transition-smooth"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      required 
                      className="bg-background border-border focus:border-accent transition-smooth"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className="bg-background border-border focus:border-accent transition-smooth"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project Inquiry" 
                    required 
                    className="bg-background border-border focus:border-accent transition-smooth"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={6}
                    required 
                    className="bg-background border-border focus:border-accent transition-smooth resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gradient-primary hover:shadow-glow transition-smooth"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;