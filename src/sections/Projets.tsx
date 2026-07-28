import { motion } from "framer-motion";
import { Github, ExternalLink, Download } from "lucide-react";
import { projects, switches } from "../data/projects";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Projets() {
  const { lang, t } = useLanguage();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "all",
  ]);
  const categories = [{ label: "all", image: null }, ...switches];

  const toggleCategory = (category: string) => {
    if (category === "all") {
      setSelectedCategories(["all"]);
    } else {
      setSelectedCategories((prev) => {
        const newCategories = prev.filter((cat) => cat !== "all");
        if (newCategories.includes(category)) {
          const filtered = newCategories.filter((cat) => cat !== category);
          return filtered.length === 0 ? ["all"] : filtered;
        } else {
          return [...newCategories, category];
        }
      });
    }
  };

  const filteredProjects = selectedCategories.includes("all")
    ? projects
    : projects.filter((project) =>
        project.category.some((cat) => selectedCategories.includes(cat))
      );

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
          {t.projets.sectionTitle}
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.label}
              onClick={() => toggleCategory(category.label)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategories.includes(category.label)
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              whileHover={{
                scale: selectedCategories.includes(category.label) ? 1.05 : 1.1,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {category.image && (
                <img
                  src={`./assets/images/${category.image}`}
                  alt={category.label}
                  className="w-5 h-5 object-contain"
                />
              )}
              {category.label === "all" ? t.projets.all : category.label}
            </motion.button>
          ))}
        </div>

        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
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
                <div className="w-full md:w-2/5 h-[300px] overflow-hidden bg-black/20 flex items-center justify-center">
                  <img
                    src={`././${
                      import.meta.env.BASE_URL
                    }/assets/images/projets/${project.image}`}
                    alt={project.title}
                    className={`w-full h-full object-contain transition-transform duration-300 hover:scale-105 transform ${
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
                    {project.description[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags[lang].map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 justify-between">
                    {project.github && project.github.length > 0 ? (
                      <motion.button
                        type="button"
                        onClick={() =>
                          project.github!.forEach((url) =>
                            window.open(url, "_blank", "noopener,noreferrer")
                          )
                        }
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github className="w-5 h-5" />
                        <span className="font-medium">{t.projets.viewCode}</span>
                      </motion.button>
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
                        <span className="font-medium">{t.projets.download}</span>
                      </motion.a>
                    ) : project.demo && project.demo.length > 0 ? (
                      <motion.button
                        type="button"
                        onClick={() =>
                          project.demo!.forEach((url) =>
                            window.open(url, "_blank", "noopener,noreferrer")
                          )
                        }
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="font-medium">{t.projets.viewProject}</span>
                      </motion.button>
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
