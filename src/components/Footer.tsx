import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import tinkerHubLogo from '@/assets/tinkerhub-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Email', icon: Mail, href: 'mailto:contact@tinkerhubmbccet.com' },
    { name: 'Location', icon: MapPin, href: '#' },
    { name: 'Phone', icon: Phone, href: 'tel:+91' }
  ];

  return (
    <footer id="contact" className="bg-surface-elevated border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={tinkerHubLogo} 
                alt="TinkerHub MBCCET" 
                className="h-10 w-10 animate-glow-pulse"
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Useless Projects
                </h3>
                <p className="text-sm text-muted-foreground">by TinkerHub MBCCET</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Build literally anything – imagination is your limit. Join the most creative 18-hour make-a-thon experience.
            </p>
          </div>

          {/* Event Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Event Information</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-primary">Date & Time</p>
                <p className="text-sm text-muted-foreground">November 2-3, 2025</p>
                <p className="text-sm text-muted-foreground">2:00 PM – 8:00 AM</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Venue</p>
                <p className="text-sm text-muted-foreground">MBCCET Campus, Peermade</p>
                <p className="text-sm text-muted-foreground">Kerala, India</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Format</p>
                <p className="text-sm text-muted-foreground">18-Hour Make-a-thon</p>
                <p className="text-sm text-muted-foreground">Limited to 100 participants</p>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              {socialLinks.map(({ name, icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                    <Icon size={16} />
                  </div>
                  <span className="text-sm">{name}</span>
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-6 p-4 bg-gradient-card rounded-lg border border-primary/20">
              <p className="text-xs text-muted-foreground mb-2">Community Size</p>
              <div className="flex justify-between text-sm">
                <span className="text-foreground">15,000+ Makers</span>
                <span className="text-primary">10,000+ Showcase</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© {currentYear} TinkerHub MBCCET. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="text-primary animate-glow-pulse" size={16} />
              <span>for makers everywhere</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-primary px-6 py-2 rounded-full text-primary-foreground font-semibold">
              <span>🚀</span>
              <span>Ready to build something useless? Register now!</span>
              <span>⚡</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;