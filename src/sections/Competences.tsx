import { motion } from "framer-motion";

export default function Competences() {
  const skills = [
    "Godot",
    "Blender",
    "React",
    "Salesforce",
    "Magento",
    "Figma",
    "Rust",
    "C",
    "HTML",
    "CSS",
    "Typescript",
    "JavaScript",
    "PHP",
    "SQL",
  ];

  return (
    <section
      id="competences"
      className="min-h-screen py-20 px-8 overflow-hidden bg-gradient-to-tr from-purple-950/50 via-blue-950/50 to-purple-950/50 border-t border-gray-700/50"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Mes Compétences
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="p-6 relative text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={`./${
                      import.meta.env.BASE_URL
                    }/assets/images/softwares/${skill.toUpperCase()}.png`}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith(".webp")) {
                        target.src = `./${import.meta.env.BASE_URL}/assets/images/softwares/${skill.toUpperCase()}.webp`;
                      }
                    }}
                    alt={`${skill} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-white">{skill}</h3>
              </div>
              <div
                className={`absolute inset-0 w-full ${
                  index % 2 === 0 ? "bg-gradient-to-l" : "bg-gradient-to-r"
                } from-blue-500 to-purple-500 opacity-20 transform -rotate-2 shadow-2xl`}
              />
              <div
                className={`absolute inset-0 w-full ${
                  index % 2 === 0 ? "bg-gradient-to-l" : "bg-gradient-to-r"
                } from-indigo-500 to-pink-500 opacity-20 transform rotate-2 shadow-2xl`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
