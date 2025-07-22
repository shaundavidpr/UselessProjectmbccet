import { Calendar, Clock, MapPin, Users, Award, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      label: "Date",
      value: "August 1-2, 2025",
      description: "Weekend make-a-thon"
    },
    {
      icon: Clock,
      label: "Duration",
      value: "15 Hours",
      description: "5:00 PM - 8:00 AM"
    },
    {
      icon: MapPin,
      label: "Venue",
      value: "MBCCET Campus",
      description: "Peermade, Kerala"
    },
    {
      icon: Users,
      label: "Participants",
      value: "150 Makers",
      description: "Limited seats available"
    }
  ];

  const sponsors = [
    {
      name: "",
      role: "",
      logo: ""
    },
    {
      name: "",
      role: "",
      logo: ""
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Event Details
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the Useless Projects Make-a-thon
          </p>
        </div>

        {/* Event Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {details.map(({ icon: Icon, label, value, description }, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-1">{label}</h3>
                <p className="text-xl font-bold text-foreground mb-2">{value}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Format Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-card border-primary/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Award className="text-primary" size={28} />
                18-Hour Make-a-thon Format
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-surface-elevated rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Build Phase</h4>
                  <p className="text-sm text-muted-foreground">5:00 PM - 8:00 AM</p>
                  <p className="text-sm mt-2">16 hours of pure creativity and coding</p>
                </div>
                <div className="text-center p-4 bg-surface-elevated rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Demo Prep</h4>
                  <p className="text-sm text-muted-foreground">6:00 AM - 7:00 AM</p>
                  <p className="text-sm mt-2">Prepare your project presentation</p>
                </div>
                <div className="text-center p-4 bg-surface-elevated rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Showcase</h4>
                  <p className="text-sm text-muted-foreground">7:00 AM - 8:00 AM</p>
                  <p className="text-sm mt-2">Present to the community</p>
                </div>
              </div>k
            </CardContent>
          </Card>
        </div>

        {/* Sponsors */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Organized By</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.map(({ name, role, logo }, index) => (
              <div 
                key={index}
                className="bg-gradient-card p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{logo}</div>
                <h4 className="font-bold text-foreground mb-1">{name}</h4>
                <p className="text-sm text-primary">{role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-card rounded-xl border border-primary/20 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Heart className="text-primary mx-auto mb-4" size={32} />
            <p className="text-muted-foreground">
              Made with ❤️ by the TinkerHub MBCCET and creators, and dreamers everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
