import { motion } from 'framer-motion';
import { parcours } from '../data/parcours';
import { ArrowUp } from 'lucide-react';

export default function Parcours() {
  return (
    <section id="parcours" className="min-h-screen py-20 px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Mon Parcours</h2>
        <div className="relative min-h-[500px]">
          {/* Flèche SVG au sommet */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
            <ArrowUp className="w-8 h-8 text-blue-400" />
          </div>

          {/* Ligne verticale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-800"></div>
          
          {parcours.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2 px-6">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.etablissement}</p>
                    <p className="text-sm text-gray-400">{item.dates}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}