import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
    const [user, setUser] = useState({
        name: '', // Ad
        surname: '', // Soyad
        mail: '', // E-posta
        password: '', // Şifre
        status: '', // Durum
        school: '', // Okul
        birthDate: '' // Doğum Günü
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                navigate('/Login');
            } else {
                alert('Kayıt başarısız!');
            }
        } catch (error) {
            alert('Sunucu hatası!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Ad" />
            <input type="text" name="surname" value={user.surname} onChange={handleChange} placeholder="Soyad" />
            <input type="email" name="mail" value={user.mail} onChange={handleChange} placeholder="E-posta" />
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Şifre" />
            <input type="text" name="status" value={user.status} onChange={handleChange} placeholder="Durum" />
            <input type="text" name="school" value={user.school} onChange={handleChange} placeholder="Okul" />
            <input type="date" name="birthDate" value={user.birthDate} onChange={handleChange} placeholder="Doğum Günü" />
            <button type="submit">Kayıt Ol</button>
        </form>
    );
}

export default Register;