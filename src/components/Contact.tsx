import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Github, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shridharjm1@gmail.com',
      href: 'mailto:shridharjm1@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8296552198',
      href: 'tel:+918296552198',
      description: 'Give me a call'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kundapura, Karnataka, India',
      href: '#',
      description: 'Based in Karnataka'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@joker810',
      href: 'https://github.com/joker810',
      description: 'Check out my code'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-gradient-primary">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gradient-primary">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. Whether you're a startup looking to build your MVP, an established company needing AI-powered solutions, or just want to chat about technology, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="p-6 bg-card hover:bg-card-hover transition-all duration-300 border-border hover:border-primary/30 group hover:glow-primary">
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-primary rounded-lg group-hover:glow-primary transition-all">
                          <item.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                          <p className="text-primary text-sm font-medium mb-1">{item.value}</p>
                          <p className="text-muted-foreground text-xs">{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Quick Actions</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                    asChild
                  >
                    <a href="mailto:shridharjm1@gmail.com" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-accent/30 hover:border-accent hover:bg-accent/10 transition-all"
                    asChild
                  >
                    <a href="https://github.com/joker810" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      View GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or how I can help..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:glow-primary transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <p className="text-muted-foreground text-sm mt-4">
                * Required fields. I typically respond within 24 hours.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;