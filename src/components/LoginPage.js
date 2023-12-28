import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        mail: email,
        password: password
      });
      const token = response.data.token;
      console.log('Login successful. Token:', token);
      // onLoginSuccess(); // Use navigate here if needed after login success
      navigate('/community'); // Example redirection after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleKayitClick = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div className="login-container">
      
      <img src="/iconmonstr-party-21-240.png" alt="User interface element" className="login-image" />
      <h2>Öğrenci Toplulukları</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Mail:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-container">
          <label>Şifre:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Giriş Yap</button>      
        <button onClick={handleKayitClick}>Kayıt Ol</button>
      </form>
    </div>
  );
}

export default LoginPage;
