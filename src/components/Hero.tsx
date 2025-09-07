import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 43, 69, 0.8), rgba(34, 43, 69, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Location and Contact Info */}
          <div className="flex items-center justify-center gap-6 mb-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Kundapura, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">shridharjm1@gmail.com</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-primary">AI-Powered</span>
            <br />
            <span className="text-foreground">Full-Stack</span>
            <br />
            <span className="text-gradient-primary">Problem Solver</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Dedicated full-stack developer specializing in{' '}
            <span className="text-primary font-semibold">React, Express, and PostgreSQL</span>
            {' '}to deliver high-ROI solutions for companies and startups in challenging markets.
          </p>

          {/* Key Skills Highlight */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['React.js', 'Node.js', 'PostgreSQL', 'AI Integration', 'Problem Solving'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:glow-primary transition-all px-8 py-3 text-lg font-semibold"
            >
              Let's Build Something Amazing
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all px-8 py-3 text-lg"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com/joker810"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:shridharjm1@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;