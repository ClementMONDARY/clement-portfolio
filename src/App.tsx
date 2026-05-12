import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import LanguageToggle from './components/LanguageToggle';
import Presentation from './sections/Presentation';
import Parcours from './sections/Parcours';
import ExperiencesFormations from './sections/ExperiencesFormations';
import Competences from './sections/Competences';
import Projets from './sections/Projets';
import Footer from './sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-900 transition-colors duration-200">
        <Navbar />
        <LanguageToggle />
        <Presentation />
        <Parcours />
        <ExperiencesFormations />
        <Competences />
        <Projets />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
