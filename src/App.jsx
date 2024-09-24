import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import VisitorLogin from './components/VisitorLogin';
import ExhibitorLogin from './components/ExhibitorLogin';
import './App.css'; // External CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar">
            <div className="logo">
              <Link to="/" className="logo-link">EventApp</Link>
            </div>
            <div className="nav-links">
              <Link to="/visitor" className="nav-item">Visitor Login</Link>
              <Link to="/exhibitor" className="nav-item">Exhibitor Login</Link>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visitor" element={<VisitorLogin />} />
            <Route path="/exhibitor" element={<ExhibitorLogin />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2024 EventApp. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
