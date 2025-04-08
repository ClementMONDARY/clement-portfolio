import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase, Code, FolderKanban} from 'lucide-react';

const navItems = [
  { icon: User, label: 'Présentation', href: '#presentation' },
  { icon: GraduationCap, label: 'Parcours', href: '#parcours' },
  { icon: Briefcase, label: 'Expériences', href: '#experiences' },
  { icon: Code, label: 'Compétences', href: '#competences' },
  { icon: FolderKanban, label: 'Projets', href: '#projets' }
];

export default function Navbar() {

  return (
    <motion.nav 
      className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-gray-600 z-50"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="space-y-6">
        {navItems.map((item, _) => (
          <motion.li 
            key={item.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={item.href}
              className="flex flex-col items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}