import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cpu, 
  GitBranch,
  Palette,
  Zap,
  Brain
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Redux', 'Next.js'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'Tanstack Query'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Development Tools',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'VS Code', 'npm/yarn', 'Vite', 'Webpack'],
      color: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Design & UX',
      icon: Palette,
      skills: ['Responsive Design', 'UI/UX Principles', 'Figma', 'Component Libraries', 'Accessibility'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'AI & Automation',
      icon: Brain,
      skills: ['AI Integration', 'Workflow Automation', 'Data Analytics', 'Problem Solving', 'Process Optimization'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Performance',
      icon: Zap,
      skills: ['Code Optimization', 'Bundle Analysis', 'Performance Monitoring', 'SEO', 'Web Vitals'],
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const proficiencyLevels = [
    { name: 'React.js', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Express.js', level: 85 },
    { name: 'AI Integration', level: 75 },
    { name: 'Problem Solving', level: 95 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-card hover:bg-card-hover transition-all duration-300 border-border hover:border-primary/30 group hover:glow-primary"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} group-hover:glow-primary transition-all`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-secondary-hover transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Proficiency Bars */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gradient-primary">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {proficiencyLevels.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out animate-glow"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Continuously learning and adapting to new technologies.{' '}
              <span className="text-primary font-semibold">Always ready for new challenges!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;