import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Header';
import Uniqueness from './pages/Unique';
import Main from './pages/Main';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Main/>
        <Uniqueness/>
      </Router>
    </div>
  );
}

export default App;
