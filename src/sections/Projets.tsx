import { motion } from "framer-motion";
import { Github, ExternalLink, Download } from "lucide-react";
import { projects } from "../data/projects";

export default function Projets() {
  return (
    <section
      id="projets"
      className="min-h-screen py-20 px-8 overflow-hidden bg-gradient-to-tl from-purple-950/50 via-blue-950/50 to-purple-950/50 border-t border-gray-700/50"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Mes Projets
        </h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative min-h-[200px] h-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`absolute inset-0 w-full scale-105 ${
                  index % 2 === 0 ? "bg-gradient-to-l" : "bg-gradient-to-r"
                } from-blue-500 to-purple-500 opacity-20 transform -rotate-1 shadow-2xl`}
              />
              <div
                className={`absolute inset-0 w-full scale-105 ${
                  index % 2 === 0 ? "bg-gradient-to-l" : "bg-gradient-to-r"
                } from-indigo-500 to-pink-500 opacity-20 transform rotate-1 shadow-2xl`}
              />

              <div className="flex items-center flex-col md:flex-row relative z-10">
                {/* Container de l'image avec hauteur fixe et overflow hidden */}
                <div className="w-full md:w-2/5 h-[300px] overflow-hidden">
                  <img
                    src={`././${
                      import.meta.env.BASE_URL
                    }/assets/images/projets/${project.image}`}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 transform ${
                      index % 2 === 0
                        ? "-translate-x-[8px]"
                        : "translate-x-[8px]"
                    } ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                  />
                </div>

                {/* Contenu textuel */}
                <div className="w-full md:w-3/5 p-4 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed break-words">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 justify-between">
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
                        href={`./${import.meta.env.BASE_URL}/exec/${
                          project.exec
                        }`}
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
