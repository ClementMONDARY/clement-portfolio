import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  const flag =
    lang === 'fr'
      ? `${import.meta.env.BASE_URL}assets/images/france.png`
      : `${import.meta.env.BASE_URL}assets/images/united-kingdom.png`;

  const label = lang === 'fr' ? 'FR' : 'EN';
  const title = lang === 'fr' ? 'Switch to English' : 'Passer en Français';

  return (
    <motion.button
      onClick={toggleLang}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={title}
      className="fixed top-4 left-4 z-50 flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-600 shadow-lg hover:border-blue-400 transition-colors cursor-pointer"
    >
      <img src={flag} alt={label} className="w-5 h-5 rounded-full object-cover" />
      <span className="text-xs text-gray-300 font-medium">{label}</span>
    </motion.button>
  );
}
