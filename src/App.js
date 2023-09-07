import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Paths/Home';
import About from './components/Paths/About';
import Contact from './components/Paths/Contact';
import Projects from './components/Paths/Projects';
import {Route,Routes} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projects" element={<Projects/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
