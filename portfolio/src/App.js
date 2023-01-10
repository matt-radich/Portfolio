import '../src/css/styles.css';
import ParticleBackground from './components/ParticleBackground';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';



function App() {
  return (
  <div className="app">

    <Navbar />
    <ParticleBackground />
    <div className='main-container'>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
     
    
  </div>
  )
}

export default App;
