import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Project from './components/Project/Project'
import Experience from './components/Experience/Experience';
import Certificate from './components/Certificate/Certificate';
import Contact from './components/Contact/Contact';
import Main from './components/Main/Main';
import './App.css';


function App() {
  return (
    <div className='page'>
      <NavBar/>
      <About/>
      <Project/>
      <Experience/>
      <Certificate/>
      <Contact/>
      <Main/>
    </div>
  );
}

export default App;
