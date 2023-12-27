import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';

function LoginPage({ onKayitClick, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        mail: email,
        password: password
      });
      const token = response.data.token;
      console.log('Login successful. Token:', token);
      onLoginSuccess(); // Başarılı giriş sonrası çağrılır
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <img src="/iconmonstr-party-21-240.png" alt="User interface element" className="login-image" />
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
