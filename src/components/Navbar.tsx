import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase, Code, FolderKanban } from 'lucide-react';

const navItems = [
  { icon: User, label: 'Présentation', href: '#presentation' },
  { icon: GraduationCap, label: 'Parcours', href: '#parcours' },
  { icon: Briefcase, label: 'Expériences', href: '#experiences' },
  { icon: Code, label: 'Compétences', href: '#competences' },
  { icon: FolderKanban, label: 'Projets', href: '#projets' }
];

export default function Navbar() {
  return (
    <div className="flex justify-center fixed z-50 w-full md:w-[108px] md:left-4 md:top-1/2 md:-translate-y-1/3 bottom-5">
      <motion.nav
        className="bg-gray-800/90 backdrop-blur-sm px-2 py-3 rounded-2xl shadow-lg border border-gray-600 flex items-center justify-center w-full max-w-[85%] md:max-w-full max-h-[90vh] md:max-h-[80vh] overflow-y-auto"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex md:flex-col w-full justify-between md:justify-start md:space-y-4 lg:space-y-6 md:space-x-0 py-1">
          {navItems.map((item) => (
            <motion.li
              key={item.label}
              className="flex-1 md:flex-none min-w-0 min-h-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href}
                className="flex flex-col items-center gap-0.5 md:gap-1 text-gray-300 hover:text-blue-400 transition-colors px-1 py-0.5"
              >
                <item.icon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <span className="text-[8px] sm:text-[10px] md:text-xs font-medium truncate w-full text-center">
                  {item.label}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}