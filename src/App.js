import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './Pages/Calculator';
import Home from './Pages/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div>
      <div className="navigation">
        <h3 className="mathmags">Math Magicians</h3>
        <ul>
          <li><Link to="/"><h3>Home</h3></Link></li>
          <li><Link to="/calculator/"><h3>Calculator</h3></Link></li>
          <li><Link to="/quote/"><h3>Quote</h3></Link></li>
        </ul>
      </div>
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
