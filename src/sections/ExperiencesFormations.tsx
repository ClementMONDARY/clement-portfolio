import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "../data/experiences";
import { formations } from "../data/formations";

export default function ExperiencesFormations() {
  const [showExperiences, setShowExperiences] = useState(true);

  return (
    <section
      id="experiences"
      className="min-h-screen py-20 px-8 overflow-hidden bg-gradient-to-tl from-purple-950/50 via-blue-950/50 to-purple-950/50 border-t border-gray-700/50"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            {showExperiences ? "Mes Expériences" : "Mes Formations"}
          </h2>

          {/* Toggle Switch */}
          <div className="flex items-center gap-4 p-2 bg-gray-500/20 rounded-full shadow-lg">
            <motion.button
              onClick={() => setShowExperiences(true)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors ${
                showExperiences
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">Expériences</span>
            </motion.button>
            <motion.button
              onClick={() => setShowExperiences(false)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors ${
                !showExperiences
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">Formations</span>
            </motion.button>
          </div>
        </div>

        <motion.div
          className="space-y-8"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {(showExperiences ? experiences : formations).map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl relative min-h-[200px] h-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Gradients de fond */}
              <div
                className={`absolute inset-y-0 w-full scale-105 ${
                  index % 2 === 0 ? "bg-gradient-to-l" : "bg-gradient-to-r"
                } from-blue-500 to-purple-500 opacity-20 transform -rotate-1 shadow-2xl`}
              />
              <div
                className={`absolute inset-y-0 w-full scale-105 ${
                  index % 2 === 0 ? "bg-gradient-to-l" : "bg-gradient-to-r"
                } from-indigo-500 to-pink-500 opacity-20 transform rotate-1 shadow-2xl`}
              />

              {/* Contenu */}
              <div className="flex flex-col md:flex-row relative z-10">
                {/* Image */}
                <div className="w-full md:w-1/3 h-48 md:h-auto">
                  <img
                    src={`./${import.meta.env.BASE_URL}/assets/images/${
                      item.image
                    }`}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 transform ${
                      index % 2 === 0
                        ? "-translate-x-[7px]"
                        : "translate-x-[7px]"
                    } ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                  />
                </div>

                {/* Texte et tags */}
                <div className="w-full md:w-2/3 p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-1">
                    {showExperiences ? item.company : item.school}
                  </p>
                  <p className="text-sm text-gray-400">{item.period}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full text-sm font-medium border border-white/30 shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
