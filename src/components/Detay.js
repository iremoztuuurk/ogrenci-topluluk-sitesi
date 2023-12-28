import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Detay.css';

function Detay() {
  const [topluluk, setTopluluk] = useState(null);
  const { toplulukId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToplulukDetay = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/topluluk/${toplulukId}`);
        setTopluluk(response.data);
      } catch (error) {
        console.error('Topluluk detayı çekilirken hata oluştu:', error);
      }
    };

    fetchToplulukDetay();
  }, [toplulukId]);

  const handleJoin = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/topluluk/${toplulukId}/join`, {
      });

      if (response.status === 200) {
        alert('Başarıyla katıldınız!');
      } else {
        alert('Katılım başarısız oldu.');
      }
    } catch (error) {
      console.error('Katılım sırasında hata oluştu:', error);
      alert('Katılım başarısız oldu.');
    }
  };

  const handleEvents = () => {
    navigate(`/etkinlikler/${toplulukId}`);
  };

  if (!topluluk) {
    return <div>Topluluk yükleniyor...</div>;
  }

  return (
    <div>
      <h2>{topluluk.name}</h2>
      <div className="topluluk-info">
        <p>Amaç: {topluluk.amac}</p>
        <p>Kuruluş Tarihi: {topluluk.kurulusTarihi}</p>
      </div>
      <button onClick={handleJoin}>Katıl</button>
      <button onClick={handleEvents}>Etkinlikler</button>
    </div>
  );
}

export default Detay;
