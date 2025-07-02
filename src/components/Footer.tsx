
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-2xl font-bold gradient-text">Siroja Muniro</h3>
              <p className="mb-4 text-gray-300">
                Backend Developer specializing in scalable systems and API development.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-white border-gray-600">
                  Available for Projects
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>API Development</li>
                <li>Database Design</li>
                <li>System Integration</li>
                <li>Performance Optimization</li>
                <li>Backend Consultation</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <div>📧 munirosiroja@gmail.com</div>
                <div>📱 +6289617017377</div>
                <div>📍 Yogyakarta, Indonesia</div>
                <div>
                  💼 <a 
                    href="https://linkedin.com/in/siroja-muniro-421b441a5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 text-center border-t border-gray-700">
            <p className="text-gray-400">
              © 2025 Siroja Muniro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
