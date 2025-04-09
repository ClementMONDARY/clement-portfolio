import { motion, useTransform, useScroll } from 'framer-motion';
import { FileDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Presentation() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section id="presentation" className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 opacity-50" />
      
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
              src={`${import.meta.env.BASE_URL}/assets/images/MONDARYClement.png`}
              alt="Photo de profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <motion.a
          href={`${import.meta.env.BASE_URL}/docs/Dev - CV CM 2025.pdf`}
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
            href="clement.mondary@edu.ecole-89.com"
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