import { Clock, Eye, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EventHighlights = () => {
  const highlights = [
    {
      icon: Clock,
      title: "15-Hour Challenge",
      description: "Build anything. Imagination is your limit.",
      delay: "0s"
    },
    {
      icon: Eye,
      title: "Get Recognized",
      description: "Showcase projects to 10,000+ makers.",
      delay: "0.2s"
    },
    {
      icon: Users,
      title: "Peer Support",
      description: "Be part of a 15,000+ strong tech community.",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Event Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the most exciting make-a-thon designed for unlimited creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map(({ icon: Icon, title, description, delay }, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-elevated animate-fade-in"
              style={{ animationDelay: delay }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                    <Icon 
                      className="text-primary group-hover:scale-110 transition-transform duration-300" 
                      size={32} 
                    />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-primary/20 rounded-full animate-glow-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
