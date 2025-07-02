
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["PHP", "Node.js", "JavaScript", "TypeScript", "Laravel", "Express.js", "Fastify", "NestJS", "Lumen"]
    },
    {
      title: "Databases & ORMs",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLServer","SQLite", "Firebase","Sequelize", "Eloquent", "TypeORM", "Prisma","Mongoose"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Docker", "Git", "AWS", "Linux", "Nginx", "Apache", "Postman", "Swagger", "CI/CD", "GitHub Actions", "Vapor"]
    },
    {
      title: "API & Integration",
      skills: ["RESTful APIs", "GraphQL", "Microservices", "Third-party APIs", "Webhooks", "OAuth"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              A comprehensive toolkit for building robust backend systems and APIs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="tech-badge">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-gradient-to-br from-primary/5 to-blue-50">
              <CardContent className="p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold">Always Learning</h3>
                <p className="mb-6 text-gray-600">
                  Technology evolves rapidly, and I stay current with the latest developments in backend development.
                  I'm always exploring new tools, frameworks, and best practices to deliver better solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">Continuous Learning</Badge>
                  <Badge variant="outline">Best Practices</Badge>
                  <Badge variant="outline">Industry Standards</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
