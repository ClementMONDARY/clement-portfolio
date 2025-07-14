import { motion, useTransform, useScroll } from "framer-motion";
import { FileDown, Github, Linkedin, Mail } from "lucide-react";

export default function Presentation() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const pointerEvents = useTransform(scrollYProgress, (value) =>
    value > 0.15 ? "none" : "auto"
  );

  return (
    <section
      id="presentation"
      className="min-h-screen flex items-center p-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[320px] overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full min-w-[1440px] preserve-aspect transform rotate-180"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            fill="rgb(88 28 135 / 0.5)"
            d="M0,128L40,144C80,160,160,192,240,181.3C320,171,400,117,480,106.7C560,96,640,128,720,160C800,192,880,224,960,240C1040,256,1120,256,1200,218.7C1280,181,1360,107,1400,69.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full min-w-[1440px] preserve-aspect transform rotate-180"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            fill="rgb(30 27 75 / 0.5)"
            d="M0,96L48,128C96,160,192,224,288,250.7C384,277,480,267,576,218.7C672,171,768,85,864,80C960,75,1056,149,1152,186.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full min-w-[1440px] preserve-aspect transform rotate-180"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            fill="rgb(23 37 84 / 0.5)"
            d="M0,160L48,133.3C96,107,192,53,288,69.3C384,85,480,171,576,218.7C672,267,768,277,864,250.7C960,224,1056,160,1152,160C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-blue-950 to-purple-950 opacity-50" />

      <motion.div
        className="max-w-6xl mx-auto relative flex flex-col items-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl text-gray-300 mb-4 font-light"
        >
          Hello, moi c'est
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-white text-center"
        >
          Clément MONDARY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-3xl text-blue-400 mb-8 font-medium text-center"
        >
          Développeur Web
        </motion.p>

        <div className="relative w-80 h-96 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-t-full rounded-b-2xl opacity-20 transform -rotate-3" />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 to-pink-500 rounded-t-full rounded-b-2xl opacity-20 transform rotate-3" />
          <div className="relative w-full h-full rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl">
            <img
              src={`./${
                import.meta.env.BASE_URL
              }/assets/images/MONDARYClement.png`}
              alt="Photo de profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <motion.a
          href={`./${import.meta.env.BASE_URL}/docs/Dev - CV CM 2025.pdf`}
          download
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileDown className="w-5 h-5" />
          Télécharger mon CV
        </motion.a>

        <motion.div
          className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            opacity,
            pointerEvents,
          }}
        >
          <motion.a
            href="https://github.com/ClementMONDARY"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Github className="w-6 h-6 text-white" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/clement-mondary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </motion.a>
          <motion.a
            href="mailto:clement.mondary@edu.ecole-89.com"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Mail className="w-6 h-6 text-white" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
