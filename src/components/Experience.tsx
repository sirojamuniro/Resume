
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Kemang Internet PTE. LTD",
      position: "Back-End Developer",
      period: "May 2025 - Now",
      location: "Singapore | Remote",
      achievements: [
        "Integrated third-party for email campaign using Brevo and backend API modifications",
        "Created API for multi-backend and multi-database client solutions (B2B and B2C)",
        "Technologies: Laravel, Laravel Modular (Nwidart), Brevo, PostgreSQL, MySQL, Eloquent, PHP"
      ],
      current: true
    },
    {
      company: "Cranium Indonesia",
      position: "Senior Back-End Developer",
      period: "July 2021 - January 2025",
      location: "Jakarta Selatan, Indonesia | Remote",
      achievements: [
        "Led development of comprehensive multi-vendor e-commerce platform (Project WinnGas)",
        "Implemented role-based access, product handling, and invoicing systems",
        "Integrated third-party logistics and payment services (JNE, Xendit, Firebase)",
        "Engineered custom social media platform for corporate communication (Project Tigaraksa)",
        "Designed logistics management system for palm oil industry with real-time tracking",
        "Technologies: Laravel, Express.js, Node.js, PHP, JavaScript(ES6), Laravel-Filament, MySQL, Firebase, Twilio, RESTful APIs, Google Maps API, SendInBlue, Eloquent, Sequelize, Twilio, NestJs, Eloquent, Sequelize, TypeOrm, API ChatGPT, CI/CD, Github Action"
      ]
    },
    {
      company: "JobFlo",
      position: "Back-End Developer",
      period: "July 2024 - October 2024",
      location: "Mountain View, CA, United States | Remote",
      achievements: [
        "Developed and maintained backend for JobFlo customer portal using Laravel",
        "Optimized existing codebases, wrote unit tests, implemented security measures",
        "Collaborated with frontend developers and stakeholders for seamless integration",
        "Managed database migrations, data seeding, and error troubleshooting",
        "Achieved 98% performance optimization through database-level and code-level enhancements",
        "Technologies: Laravel, PHP, MySQL, Redis, AWS, Flare, Telescope, Inertia, Livewire, Eloquent, Vapor, AWS SQS"
      ]
    },
    {
      company: "PT Svara Inovasi Indonesia (SVARA)",
      position: "Back-End Developer",
      period: "May 2023 - October 2023",
      location: "Bandung, Indonesia | Remote",
      achievements: [
        "Developed APIs for high-performance applications handling millions of data points",
        "Implemented data caching strategies for optimized response times",
        "Technologies: Fastify, TypeScript, PostgreSQL, Redis, TypeORM, Node.js, JavaScript"
      ]
    },
    {
      company: "Bio Farma - Indonesia",
      position: "Back-End Developer",
      period: "May 2022 - October 2022",
      location: "Bandung, Indonesia | Remote",
      achievements: [
        "Developed Single Sign-On (SSO) system with WhatsApp API integration for OTP validation",
        "Technologies: Laravel, RESTful APIs, WhatsApp API, Eloquent, PHP"
      ]
    },
    {
      company: "PT Digdaya Inovasi Gemilang",
      position: "Back-End Developer",
      period: "September 2021 - May 2022",
      location: "Yogyakarta, Indonesia | Remote",
      achievements: [
        "Built dynamic alumni platform for ITB using Laravel and MySQL",
        "Integrated with CMS solutions for content management",
        "Technologies: Laravel, PostgreSQL, AdminLTE CMS, Eloquent, Blade, jQuery, PHP"
      ]
    },
    {
      company: "CV Sophismata Global Indotama",
      position: "Backend Developer",
      period: "August 2020 - July 2021",
      location: "Yogyakarta, Indonesia | Onsite",
      achievements: [
        "Created RESTful API for national online dating website with payment gateway integration",
        "Developed RESTful API for game website administration and frontend support",
        "Technologies: Laravel, MySQL, Redis, Express.js, jQuery, AdminLTE CMS, Blade, Eloquent, Sequelize, NextJs, TypeScript, JavaScript, Node.js, PHP"
      ]
    },
    {
      company: "PT Gosanita Global Yogyakarta",
      position: "Odoo Developer",
      period: "February 2020 - August 2020",
      location: "Yogyakarta, Indonesia | Onsite",
      achievements: [
        "Enhanced inventory module for stock management and POS system integration",
        "Developed accounting, journal, and inventory modules with warehouse management",
        "Technologies: Odoo, PostgreSQL, Python, Backbone.js"
      ]
    }
  ];

  return (
    <section id="experience"  className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-600">
              5+ years of building scalable backend systems and leading development projects
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className={`card-hover ${exp.current ? 'ring-2 ring-primary/20 bg-gradient-to-r from-primary/5 to-blue-50' : ''}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col mb-4 md:flex-row md:items-start md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="mb-1 text-xl font-bold text-gray-900">{exp.position}</h3>
                      <h4 className="mb-2 text-lg font-semibold text-primary">{exp.company}</h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                        <Badge variant="outline">{exp.period}</Badge>
                        <Badge variant="outline">{exp.location}</Badge>
                        {exp.current && <Badge className="bg-green-500">Current Position</Badge>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achieveIndex) => (
                      <div key={achieveIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 rounded-full bg-primary"></div>
                        <p className="leading-relaxed text-gray-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-blue-50">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold">Key Achievements</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mb-2 text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600">Performance Optimization Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">Successful Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-gray-600">Years of Expertise</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
