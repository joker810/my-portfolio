import { Card } from '@/components/ui/card';
import { Brain, Code, Zap, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Leveraging AI tools and automation to solve complex business challenges and optimize workflows.',
    },
    {
      icon: Code,
      title: 'Full-Stack Expertise',
      description: 'Proficient in React, Express, PostgreSQL, and modern web technologies for end-to-end development.',
    },
    {
      icon: Zap,
      title: 'High-ROI Focus',
      description: 'Building solutions that deliver measurable business value and competitive advantages.',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Specialized in tackling complex technical challenges with creative, efficient solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about transforming ideas into powerful digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gradient-primary">
                AI-Powered Problem Solver & Full-Stack Developer
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a dedicated full-stack developer with expertise in{' '}
                  <span className="text-primary font-semibold">React, Express, and PostgreSQL</span>, 
                  I specialize in building responsive, user-friendly web applications that integrate AI 
                  for high-ROI outcomes.
                </p>
                
                <p>
                  In today's challenging market with ongoing layoffs, I position myself as an 
                  <span className="text-accent font-semibold"> AI-powered problem solver</span> who 
                  delivers solutions that matter—automating workflows, optimizing performance, and 
                  solving critical business challenges that drive growth and efficiency.
                </p>
                
                <p>
                  My approach combines technical expertise with creative problem-solving, ensuring 
                  every project delivers measurable value. From front-end interfaces to backend 
                  systems, I create cohesive solutions that enhance user experience and business outcomes.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-foreground">Phone:</span>
                  <span className="text-muted-foreground">+91 8296552198</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-foreground">Location:</span>
                  <span className="text-muted-foreground">Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card hover:bg-card-hover transition-all duration-300 hover:glow-primary border-border hover:border-primary/30 group"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-gradient-primary rounded-full group-hover:glow-primary transition-all">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;