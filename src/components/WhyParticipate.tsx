import { Lightbulb, Rocket, DollarSign, Coffee } from 'lucide-react';

const WhyParticipate = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Experiment without real-world limits",
      description: "Build crazy, fun, and completely useless projects without worrying about practical applications."
    },
    {
      icon: Rocket,
      title: "Perfect nudge to start building",
      description: "Get the motivation and environment you need to turn your wildest ideas into reality."
    },
    {
      icon: DollarSign,
      title: "Monthly scholarships for top creators",
      description: "Outstanding participants get recognized with scholarships and opportunities."
    },
    {
      icon: Coffee,
      title: "Snacks provided to boost creativity",
      description: "Keep your energy high with complimentary snacks and refreshments throughout the event."
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Why Participate?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This isn't just another hackathon. It's a celebration of creativity, innovation, and the joy of building something completely unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="group flex items-start space-x-6 p-6 bg-gradient-card rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                  <Icon 
                    className="text-primary group-hover:scale-110 transition-transform duration-300" 
                    size={28} 
                  />
                </div>
                <div className="absolute inset-0 w-14 h-14 bg-primary/20 rounded-lg animate-glow-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-xl border border-primary/20 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Build the Impossible?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join fellow creators in the most exciting 18-hour journey of unlimited imagination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow text-primary-foreground px-8 py-3 rounded-lg font-semibold">
                Register Now
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 rounded-lg font-semibold">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;