import { motion } from 'framer-motion';
import { Github, ExternalLink, Download } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projets() {
    return (
        <section id="projets" className="min-h-screen bg-gray-800 py-20 px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Mes Projets</h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
                <motion.div
                key={index}
                className="bg-gray-700 rounded-xl overflow-hidden shadow-lg max-h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                >
                <div className="md:flex h-full">
                  <div className="md:w-2/5 h-48 md:h-[350px] overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}/assets/images/projets/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  </div>
                  <div className="p-8 md:w-3/5 overflow-y-auto">
                  <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 bg-blue-900 text-blue-100 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {project.github ? (
                      <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      >
                      <Github className="w-5 h-5" />
                      <span className="font-medium">Voir le code</span>
                      </motion.a>
                    ) : (
                      <motion.a className="invisible">
                      <span></span>
                      </motion.a>
                    )}
                    {project.exec ? (
                    <motion.a
                      href={`${import.meta.env.BASE_URL}/exec/${project.exec}`}
                      download
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Download className="w-5 h-5" />
                      <span className="font-medium">Télécharger</span>
                    </motion.a>
                    ) : project.demo ? (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-medium">Voir le projet</span>
                    </motion.a>
                    ) : null}
                  </div>
                  </div>
                </div>
                </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
}