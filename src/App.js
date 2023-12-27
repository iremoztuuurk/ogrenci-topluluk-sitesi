import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import KayitOlPage from './components/KayitOlPage';
import TopluluklarSayfasi from './components/KayitOlPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('login');

  const handleKayitClick = () => {
    setCurrentPage('kayit');
  };

  const handleLoginSuccess = () => {
    setCurrentPage('topluluk'); // Başarılı giriş sonrası yönlendirme
  };

  return (
    <div className="App">
      {currentPage === 'login' && <LoginPage onKayitClick={handleKayitClick} onLoginSuccess={handleLoginSuccess} />}
      {currentPage === 'kayit' && <KayitOlPage />}
      {currentPage === 'topluluk' && <TopluluklarSayfasi />} {/* Topluluk sayfasını burada gösterebilirsiniz */}
    </div>
  );
}

export default App;
