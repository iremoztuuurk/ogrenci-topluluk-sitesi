import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import TopluluklarSayfasi from './components/TopluluklarSayfasi';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/topluluk" element={<TopluluklarSayfasi />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
