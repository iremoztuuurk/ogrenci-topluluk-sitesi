import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import KayitOlPage from './components/KayitOlPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('login');

  const handleKayitClick = () => {
    setCurrentPage('kayit'); // "Kayıt Ol" butonuna tıklandığında sayfa "kayit" moduna geçer
  };

  return (
    <div className="App">
      {currentPage === 'login' && <LoginPage onKayitClick={handleKayitClick} />}
      {currentPage === 'kayit' && <KayitOlPage />}
    </div>
  );
}

export default App;