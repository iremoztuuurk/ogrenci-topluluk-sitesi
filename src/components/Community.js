import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Community.css';

function Community() {
  const [topluluklar, setTopluluklar] = useState([]);

  useEffect(() => {
    const fetchTopluluklar = async () => {
      try {
        const response = await axios.get('http://localhost:8080/topluluk');
        setTopluluklar(response.data);
      } catch (error) {
        console.error('Topluluklar çekilirken hata oluştu:', error);
      }
    };

    fetchTopluluklar();
  }, []);

  return (
    <div className="topluluklar-container">
      <h2>Topluluklar</h2>
      <ul>
        {topluluklar.map(topluluk => (
          <li key={topluluk.id}>
            {/* Topluluk ismini göstermek için Link bileşeni içine topluluk.name ekledim. */}
            <Link to={`/topluluk/${topluluk.id}`}>{topluluk.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Community;
