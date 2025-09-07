import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Shopping Cart UI',
      description: 'Developed a fully functional shopping cart UI with clean, responsive design. Features product interaction, cart management, and checkout flow with optimized user experience.',
      technologies: ['React.js', 'Tailwind CSS', 'Context API', 'Local Storage'],
      github: 'https://github.com/joker810/React-shopping-ui.git', // Placeholder
      live: 'https://react-shopping-ui-ruddy.vercel.app/', // Placeholder
      aiPotential: 'AI-powered product recommendations and dynamic pricing optimization',
      category: 'E-commerce',
      featured: true,
    },
    {
      title: 'React Food Order App',
      description: 'Dynamic food ordering interface with contextual state management. Includes browsable menu, real-time cart updates, form validation, and responsive design.',
      technologies: ['React.js', 'Custom Hooks', 'Modal Components', 'Form Validation'],
      github: 'https://github.com/joker810/Food-Order-app-r.js.git', // Placeholder
      live: 'https://food-order-app-r-js.vercel.app/', // Placeholder
      aiPotential: 'Smart menu recommendations based on user preferences and dietary restrictions',
      category: 'Food & Beverage',
      featured: true,
    },
    {
      title: 'Movie Favorites App',
      description: 'React application that fetches popular movies from TMDb API with favorites functionality using local storage. Features React Router navigation and Context API state management.',
      technologies: ['React.js', 'TMDb API', 'React Router', 'Context API', 'Local Storage'],
      github: 'https://github.com/joker810/movie-favorites.git', // Placeholder
      live: '#', // Placeholder
      aiPotential: 'AI-driven movie recommendations and personalized content discovery',
      category: 'Entertainment',
      featured: false,
    },
    {
      title: 'Visited Countries Tracker',
      description: 'Full-stack application for managing user profiles and travel data. Features responsive design, efficient data handling, and dynamic country visualization.',
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'RESTful APIs'],
      github: 'https://github.com/joker810/Family-trips-Tracker.git', // Placeholder
      live: '#', // Placeholder
      aiPotential: 'Travel recommendations based on user history and AI-powered trip planning',
      category: 'Travel',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions that combine technical expertise with creative problem-solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`p-8 bg-card hover:bg-card-hover transition-all duration-300 border-border hover:border-primary/30 group relative overflow-hidden ${
                  project.featured ? 'hover:glow-primary' : 'hover:glow-accent'
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Category */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient-primary transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-secondary-hover transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* AI Potential */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-1">AI Enhancement Potential</h4>
                      <p className="text-xs text-muted-foreground">{project.aiPotential}</p>
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all flex items-center gap-2"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:glow-primary transition-all flex items-center gap-2"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more projects or discussing collaboration?
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:glow-primary transition-all"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;