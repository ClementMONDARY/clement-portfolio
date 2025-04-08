import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences } from '../data/experiences';
import { formations } from '../data/formations';

export default function ExperiencesFormations() {
  const [showExperiences, setShowExperiences] = useState(true);

  return (
    <section id="experiences" className="min-h-screen bg-gray-100 dark:bg-gray-800 py-20 px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
            {showExperiences ? "Mes Expériences" : "Mes Formations"}
          </h2>

          {/* Toggle Switch */}
          <div className="flex items-center gap-4 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg">
            <motion.button
              onClick={() => setShowExperiences(true)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors ${
                showExperiences
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
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
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
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
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg h-[200px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="md:flex h-full">
                {/* Image */}
                <div className="md:w-1/3 h-40 md:h-auto overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 h-[200px]"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    {showExperiences ? item.company : item.school}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
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