import { useState } from 'react';
import { Zap, Calendar, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleTitleClick = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  const floatingIcons = [
    { Icon: Zap, delay: '0s', position: 'top-1/4 left-1/4' },
    { Icon: Calendar, delay: '1s', position: 'top-1/3 right-1/4' },
    { Icon: Users, delay: '2s', position: 'bottom-1/3 left-1/3' },
    { Icon: Trophy, delay: '1.5s', position: 'bottom-1/4 right-1/3' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <Icon
          key={index}
          className={`absolute ${position} text-primary/30 animate-float hidden lg:block`}
          size={32}
          style={{ animationDelay: delay }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 cursor-pointer transition-all duration-300 ${
              isGlitching ? 'animate-glitch' : ''
            }`}
            onClick={handleTitleClick}
          >
        <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-glow inline-block">
              <img
                src="/assets/useless" // Replace with your actual image path
                alt=""
                className="w-full h-auto"
              />
            </span>

          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-slide-in-right">
            A first-of-its-kind 15-hour make-a-thon for boundless creativity!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow text-lg px-8 py-4 animate-glow-pulse"
            >
              <Zap className="mr-2" size={20} />
              Register Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>

          {/* Event Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-surface-elevated/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in">
              <Calendar className="text-primary mb-2 mx-auto" size={24} />
              <p className="text-sm text-muted-foreground">August 1-2</p>
              <p className="font-semibold">15-Hour Challenge</p>
            </div>
            
            <div className="bg-surface-elevated/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Users className="text-primary mb-2 mx-auto" size={24} />
              <p className="text-sm text-muted-foreground">Limited to</p>
              <p className="font-semibold">150 Participants</p>
            </div>
            
            <div className="bg-surface-elevated/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Trophy className="text-primary mb-2 mx-auto" size={24} />
              <p className="text-sm text-muted-foreground">Recognition for</p>
              <p className="font-semibold">Top Creators</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
