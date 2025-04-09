import Navbar from './components/Navbar';
import Presentation from './sections/Presentation';
import Parcours from './sections/Parcours';
import ExperiencesFormations from './sections/ExperiencesFormations';
import Competences from './sections/Competences';
import Projets from './sections/Projets';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-200">
      <Navbar />
      <Presentation />
      <Parcours />
      <ExperiencesFormations />
      <Competences />
      <Projets />
    </div>
  );
}

export default App;