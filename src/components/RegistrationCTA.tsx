import { useState, useEffect } from 'react';
import { Zap, Users, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RegistrationCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [registeredCount, setRegisteredCount] = useState(67); // Mock current registration count

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show CTA when user has scrolled past hero section
      setIsVisible(scrollY > windowHeight * 0.5 && scrollY < documentHeight - windowHeight * 1.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const spotsLeft = 150 - registeredCount;
  const progressPercentage = (registeredCount / 150) * 150;

  return (
    <>
      {/* Floating CTA */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'
      }`}>
        <div className="bg-gradient-card border border-primary/40 rounded-xl p-4 shadow-elevated backdrop-blur-sm max-w-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Zap className="text-primary animate-glow-pulse" size={20} />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Quick Register</h4>
              <p className="text-xs text-muted-foreground">Only {spotsLeft} spots left!</p>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>{registeredCount}/150 registered</span>
              <span>{progressPercentage.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-surface-elevated rounded-full h-2">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow"
            size="sm"
          >
            <Zap className="mr-2" size={16} />
            Register Now
          </Button>
        </div>
      </div>

      {/* Main Registration Section */}
      <section className="py-20 bg-gradient-to-r from-surface via-background to-surface relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full animate-glow-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Ready to Create Something Useless?
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't miss this opportunity to showcase your creativity. Registration closes at 150 participants!
              </p>

              {/* Registration Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-card p-6 rounded-xl border border-primary/20 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  <Users className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-2xl font-bold text-foreground">{registeredCount}</p>
                  <p className="text-sm text-muted-foreground">Already Registered</p>
                </div>
                
                <div className="bg-gradient-card p-6 rounded-xl border border-accent/20 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <AlertCircle className="text-accent mx-auto mb-2" size={32} />
                  <p className="text-2xl font-bold text-foreground">{spotsLeft}</p>
                  <p className="text-sm text-muted-foreground">Spots Remaining</p>
                </div>
                
                <div className="bg-gradient-card p-6 rounded-xl border border-primary/20 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                  <Clock className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-2xl font-bold text-foreground">15</p>
                  <p className="text-sm text-muted-foreground">Hours of Fun</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Registration Progress</span>
                  <span>{registeredCount}/150 participants</span>
                </div>
                <div className="w-full bg-surface-elevated rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 relative"
                    style={{ width: `${progressPercentage}%` }}
                  >
                    <div className="absolute inset-0 bg-primary-glow opacity-50 animate-glow-pulse" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {spotsLeft < 20 && "⚡ Limited spots remaining!"}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow text-xl px-12 py-6 animate-glow-pulse"
                >
                  <Zap className="mr-3" size={24} />
                  Register Now - It's Free!
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xl px-12 py-6"
                >
                  Share with Friends
                </Button>
              </div>

              {/* Urgency Message */}
              <div className="mt-8 p-4 bg-destructive/10 border border-destructive/20 rounded-lg max-w-md mx-auto animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <p className="text-destructive font-semibold flex items-center justify-center gap-2">
                  <AlertCircle size={20} />
                  Registration closes when we reach 150 participants!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationCTA;
