import { motion } from 'framer-motion';

export default function Competences() {
    const skills = ['Rust', 'Godot', 'C', 'HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Symfony', 'React', 'Node', 'Blender'];

    return (
        <section id="competences" className="min-h-screen py-20 px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Mes Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img 
              src={`${import.meta.env.BASE_URL}images/softwares/${skill.toUpperCase()}.png`}
              alt={`${skill} logo`}
              className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="font-semibold dark:text-white">{skill}</h3>
          </motion.div>
        ))}
          </div>
        </motion.div>
      </section>
    );
}