import { useState } from 'react';
import { Zap, Calendar, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';
import uselessLogo from '@/assets/useless-logo.png';

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
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={uselessLogo} 
              alt="Useless Projects Logo" 
              className={`w-64 md:w-80 lg:w-96 mx-auto cursor-pointer transition-all duration-300 hover:scale-105 ${
                isGlitching ? 'animate-glitch' : ''
              }`}
              onClick={handleTitleClick}
            />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            A first-of-its-kind 18-hour make-a-thon for boundless creativity and innovation
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-[1.02] transition-all duration-200 shadow-lg text-lg px-10 py-4 font-medium"
            >
              <Zap className="mr-2" size={20} />
              Register Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-200 text-lg px-10 py-4 font-medium"
            >
              Learn More
            </Button>
          </div>

          {/* Event Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-surface-elevated/80 backdrop-blur-md p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center">
              <Calendar className="text-primary mb-4 mx-auto" size={28} />
              <p className="text-sm text-muted-foreground mb-1 font-medium">Event Dates</p>
              <p className="font-semibold text-lg">November 2-3</p>
              <p className="text-sm text-muted-foreground mt-1">18-Hour Challenge</p>
            </div>
            
            <div className="bg-surface-elevated/80 backdrop-blur-md p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center">
              <Users className="text-primary mb-4 mx-auto" size={28} />
              <p className="text-sm text-muted-foreground mb-1 font-medium">Participants</p>
              <p className="font-semibold text-lg">Limited to 100</p>
              <p className="text-sm text-muted-foreground mt-1">Exclusive Opportunity</p>
            </div>
            
            <div className="bg-surface-elevated/80 backdrop-blur-md p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center">
              <Trophy className="text-primary mb-4 mx-auto" size={28} />
              <p className="text-sm text-muted-foreground mb-1 font-medium">Recognition</p>
              <p className="font-semibold text-lg">Top Creators</p>
              <p className="text-sm text-muted-foreground mt-1">Showcase & Awards</p>
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