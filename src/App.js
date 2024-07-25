import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/Project'
import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Main from './components/Main';
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
