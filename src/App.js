import Experience from './components/Experience';
import GeneralInfo from './components/generalInfo';
import Wexperience from './components/Wexperience';

function App() {
  return (
    <div className="w-full h-full bg-red-300 text-center">
     <h1 className="text-3xl">Edidiong's Resume</h1>
     <GeneralInfo />
     <h1 className="mt-4 text-2xl">Experience</h1>
     <Experience />
     <h1 className="text-2xl">Work Experience</h1>
     <Wexperience />
    </div>
  );
}

export default App;
