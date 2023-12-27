import React from 'react';
import { Link } from 'react-router-dom';
import './TopluluklarSayfasi.css';

function TopluluklarSayfasi() {
  // Topluluk listesi
  const topluluklar = [
    { name: 'Dans Topluluğu', path: '/dans' },
    { name: 'Tiyatro Topluluğu', path: '/tiyatro' },
    { name: 'Müzik Topluluğu', path: '/muzik' },
    { name: 'Gezi Topluluğu', path: '/gezi' },
    { name: 'Fotoğrafçılık Topluluğu', path: '/fotograf' },
    { name: 'Eğlence Topluluğu', path: '/eglence' }
  ];

  return (
    <div className="topluluklar-container">
      <h2>Topluluklar</h2>
      <ul>
        {topluluklar.map((topluluk, index) => (
          <li key={index}>
            <Link to={topluluk.path}>{topluluk.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopluluklarSayfasi;
