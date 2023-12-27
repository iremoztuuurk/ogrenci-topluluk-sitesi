import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Router ve Route bileşenlerini içe aktarın
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import TopluluklarSayfasi from './components/TopluluklarSayfasi';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LoginPage} />
        <Route path="/register" component={Register} />
        <Route path="/topluluk" component={TopluluklarSayfasi} />
      </Router>
    </div>
  );
}

export default App;
