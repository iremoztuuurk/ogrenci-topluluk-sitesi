import React, { useState } from 'react';
import './KayitOlPage.css'; // CSS dosyasını ekleyin

function KayitOlPage() {
  const [formData, setFormData] = useState({
    tc: '',
    name: '',
    surname: '',
    birthdate: '',
    school: '',
    email: '',
    password: '' // Şifre alanı
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Backend API'ye formData'yı gönderme işlemi
    console.log("Form Data:", formData);

    // Örnek olarak axios ile bir API'ye post işlemi yapabilirsiniz:
    // await axios.post('API_URL', formData);
  };

  return (
    <div className="kayit-container">
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="tc"
          placeholder="TC" 
          value={formData.tc} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="name"
          placeholder="İsim" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="surname"
          placeholder="Soyisim" 
          value={formData.surname} 
          onChange={handleChange} 
        />
        <input 
          type="date" 
          name="birthdate"
          placeholder="Doğum Tarihi" 
          value={formData.birthdate} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="school"
          placeholder="Okul" 
          value={formData.school} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <input 
          type="password" // Şifre tipi
          name="password"
          placeholder="Şifre" 
          value={formData.password} 
          onChange={handleChange} 
        />
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
}

export default KayitOlPage;
