import { Card } from '@/components/ui/card';
import { MapPin, Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      company: 'Hasnain Energy',
      location: 'Delhi (Remote)',
      position: 'Configuration Engineer, Version Control and UI/UX developer',
      period: '2023 - Present',
      description: [
        'Collaborated with cross-functional teams to release the first version of configuration guidelines',
        'Authored comprehensive documentation outlining complete product build and execution process',
        'Enabled streamlined setup and deployment for internal teams through optimized workflows',
        'Demonstrated problem-solving by optimizing UI/UX and version control processes',
        'Identified opportunities for AI automation in configuration management'
      ],
      achievements: [
        'Successfully launched first configuration guidelines version',
        'Reduced deployment time by 40% through improved documentation',
        'Enhanced team productivity with streamlined processes',
        'Implemented SonarQube Cloud for React codebase, establishing automated code quality and security analysis to improve reliability and maintainability.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Indian Institute of Management and Technical Education',
      university: 'Belagavi University',
      period: '2019 - 2022',
      description: 'Comprehensive computer science education with focus on practical application development',
      highlights: ['Data Structures & Algorithms', 'Database Management', 'Web Development', 'Software Engineering']
    },
    {
      degree: 'Pre-University (PCMC\'s)',
      institution: 'Bhandarkar\'s PU College',
      location: 'Kundapur',
      period: '2015 - 2016',
      description: 'Strong foundation in Physics, Chemistry, Mathematics, and Computer Science',
      highlights: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry']
    }
  ];

  const certifications = [
    {
      title: 'Front-End Development Libraries',
      issuer: 'FreeCodeCamp',
      date: '2023',
      description: 'Comprehensive certification covering React, Redux, and modern frontend development practices',
      skills: ['React.js', 'Redux', 'JavaScript ES6+', 'Frontend Architecture']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience & <span className="text-gradient-primary">Background</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building expertise through hands-on experience and continuous learning
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <Card key={index} className="p-8 bg-card hover:bg-card-hover transition-all duration-300 border-border hover:border-primary/30 hover:glow-primary">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{job.position}</h4>
                      <p className="text-lg text-primary font-semibold mb-2">{job.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Responsibilities</h5>
                      <ul className="space-y-2">
                        {job.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Achievements</h5>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 bg-card hover:bg-card-hover transition-all duration-300 border-border hover:border-primary/30">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                      {edu.university && (
                        <p className="text-muted-foreground text-sm mb-1">{edu.university}</p>
                      )}
                      {edu.location && (
                        <p className="text-muted-foreground text-sm mb-1">{edu.location}</p>
                      )}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Certifications
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-6 bg-card hover:bg-card-hover transition-all duration-300 border-border hover:border-primary/30 hover:glow-accent">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-foreground mb-1">{cert.title}</h4>
                      <p className="text-accent font-semibold mb-1">{cert.issuer}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;