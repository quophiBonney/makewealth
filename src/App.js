import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Header';
import Uniqueness from './pages/Unique';
import Main from './pages/Main';
import Features from './pages/Features';
import Digital from './pages/Digital';
import AOS from "aos";
import "aos/dist/aos.css";
import Team from './pages/Team';
import Footer from './pages/Footer';
import Benefit from './pages/Benefit';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Main/>
        <Features/>
        <Team/>
        <Digital/>
        <Benefit/>
        <Uniqueness/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
