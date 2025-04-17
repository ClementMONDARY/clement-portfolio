import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative text-white py-16 min-h-[300px] bg-gradient-to-tr from-purple-950/50 via-blue-950/50 to-purple-950/50">
      {/* Vagues SVG */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full"
      >
        <path 
          fill="rgb(88 28 135 / 0.5)"
          d="M0,128L40,144C80,160,160,192,240,181.3C320,171,400,117,480,106.7C560,96,640,128,720,160C800,192,880,224,960,240C1040,256,1120,256,1200,218.7C1280,181,1360,107,1400,69.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full"
      >
        <path 
          fill="rgb(30 27 75 / 0.5)"
          d="M0,96L48,128C96,160,192,224,288,250.7C384,277,480,267,576,218.7C672,171,768,85,864,80C960,75,1056,149,1152,186.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full"
      >
        <path 
          fill="rgb(23 37 84 / 0.5)"
          d="M0,160L48,133.3C96,107,192,53,288,69.3C384,85,480,171,576,218.7C672,267,768,277,864,250.7C960,224,1056,160,1152,160C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Contenu du footer */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-12">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/ClementMONDARY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/clement-mondary"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:clement.mondary@edu.ecole-89.com"
            className="hover:text-blue-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm text-gray-400">© 2025 Clément Mondary</p>
      </div>
    </footer>
  );
}