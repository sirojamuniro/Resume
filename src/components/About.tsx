
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate backend developer with 5+ years of experience building scalable, 
              high-performance systems and APIs that power modern applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  I started my career as a backend developer with a focus on creating robust, 
                  scalable systems. Over the years, I've worked with various technologies and 
                  frameworks, always staying current with industry best practices.
                </p>
                <p>
                  My expertise lies in building RESTful APIs, optimizing database performance, 
                  and integrating complex third-party services. I'm passionate about clean code, 
                  system architecture, and delivering solutions that scale.
                </p>
                <p>
                  Currently based in Yogyakarta, Indonesia, I work with clients globally, 
                  helping them build the backend infrastructure they need to succeed.
                </p>
              </div>
            </div>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Professional Highlights</CardTitle>
                <CardDescription>What I bring to every project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Performance Optimization</h4>
                      <p className="text-sm text-gray-600">Expert in database optimization and API performance tuning</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Scalable Architecture</h4>
                      <p className="text-sm text-gray-600">Designing systems that grow with your business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">API Development</h4>
                      <p className="text-sm text-gray-600">Building robust RESTful APIs with comprehensive documentation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Third-party Integration</h4>
                      <p className="text-sm text-gray-600">Seamless integration with external services and platforms</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="outline">5+ Years Experience</Badge>
              <Badge variant="outline">Remote Work Expert</Badge>
              <Badge variant="outline">Fast Learner</Badge>
              <Badge variant="outline">Problem Solver</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
