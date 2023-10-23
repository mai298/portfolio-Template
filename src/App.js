import './App.css';
import Clients from './Components/Clients/Clients';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';
import Intro from './Components/intro/Intro';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
