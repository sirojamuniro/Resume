
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - In real implementation, this would send to your backend
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mailto link with form data
      const subject = `Project Inquiry: ${formData.project}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.project}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Message:
${formData.message}
      `;
      
      const mailtoLink = `mailto:munirosiroja@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Email client opened!",
        description: "Your project inquiry has been prepared. Please send the email to complete your request.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "API Development",
    "Database Design & Optimization",
    "System Integration",
    "Performance Optimization",
    "Legacy System Migration",
    "Custom Backend Solution",
    "Consultation",
    "Permanent Employee",
    "Part-time Employee",
    "Full-time Employee",
    "Project-based",
    "Other"
  ];

  const budgetRanges = [
    "Under IDR 10.000.000",
    "IDR 10.000.000 - IDR 15.000.000",
    "IDR 15.000.000 - IDR 30.000.000",
    "IDR 30.000.000 - IDR 50.000.000",
    "IDR 50.000.000+",
    "Let's discuss"
  ];

  const timelines = [
    "ASAP (Rush)",
    "1-2 weeks",
    "1 month",
    "Monthly",
    "2-3 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Ready to build something amazing? Get in touch for your next backend project.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="outline">🚀 Quick Response</Badge>
              <Badge variant="outline">💡 Free Consultation</Badge>
              <Badge variant="outline">🎯 Custom Solutions</Badge>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Project Inquiry</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium">Project Type *</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium">Project Details *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project requirements, goals, and any specific technologies you'd like to use..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 text-lg font-semibold"
                  >
                    {isSubmitting ? "Preparing Email..." : "Send Project Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        📧
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-gray-600">munirosiroja@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        📱
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-gray-600">+6289617017377</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        📍
                      </div>
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-gray-600">Yogyakarta, Indonesia</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        💼
                      </div>
                      <div>
                        <div className="font-medium">LinkedIn</div>
                        <a 
                          href="https://linkedin.com/in/siroja-muniro-421b441a5" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Connect with me
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-blue-50">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold">Why Work With Me?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">5+ years of proven backend expertise</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Fast learner, highly adaptable</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Performance optimization specialist</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Clean, maintainable code practices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Excellent communication skills</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-2xl">🚀</div>
                  <h3 className="mb-2 font-bold">Available for Projects or Contract</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Currently accepting new backend development projects and contracts. 
                    Quick turnaround and competitive rates.
                  </p>
                  <Badge className="bg-green-500">Open for Work</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
