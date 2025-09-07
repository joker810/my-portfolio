import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/joker810',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:shridharjm1@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left side - Brand & Copyright */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gradient-primary mb-2">Shridhar JM</h3>
              <p className="text-muted-foreground text-sm">
                AI-Powered Full-Stack Developer
              </p>
              <p className="text-muted-foreground text-xs mt-2">
                © {currentYear} Shridhar JM. All rights reserved.
              </p>
            </div>

            {/* Center - Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Right side - Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-secondary rounded-lg group"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>
                Built with React, TypeScript, and Tailwind CSS
              </p>
              <p className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500" /> in Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;