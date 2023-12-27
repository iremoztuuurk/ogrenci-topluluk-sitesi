import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onKayitClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giriş işlemleri burada yapılabilir
    console.log(email, password);
  };

  return (
    <div className="login-container">
      <img src="/iconmonstr-party-21-240.png" alt="User interface element" className="login-image" /> {/* Resim eklenmiştir */}
      <h2>Öğrenci Toplulukları</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Şifre" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Giriş Yap</button>      
        <button onClick={onKayitClick}>Kayıt Ol</button>
      </form>
    </div>
  );
}

export default LoginPage;
