
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-primary/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge variant="outline" className="px-4 py-2 mb-6 text-sm font-medium">
            🚀 Available for Backend Projects and Contract/Permanent Working
          </Badge>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            <span className="gradient-text">Siroja Muniro</span>
          </h1>
          
          <p className="mb-4 text-xl font-medium text-gray-600 md:text-2xl">
            Backend Developer | Backend Engineer | Backend Specialist
          </p>
          
          <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-gray-500">
            5+ years of experience building scalable RESTful APIs, optimizing robust backend systems, 
            and integrating complex third-party platforms with modern frameworks and best practices.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row">
            <a href="#experience">
            <Button size="lg" className="px-8 py-6 text-lg font-semibold animate-glow">
              View My Work
            </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Request Project
              </Button>
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="text-gray-500">Specialized in:</span>
            {["PHP", "Node.js", "Laravel", "Express.js", "PostgreSQL", "RESTful APIs", "Fastify", "NestJS", "Lumen"].map((tech) => (
              <Badge key={tech} variant="secondary" className="tech-badge">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
