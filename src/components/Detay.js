import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Detay.css';

function Detay() {
  const [topluluk, setTopluluk] = useState(null);
  const { toplulukId } = useParams();

  useEffect(() => {
    const fetchToplulukDetay = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/topluluk/${toplulukId}`);
        setTopluluk(response.data);
      } catch (error) {
        console.error('Topluluk detayı çekilirken hata oluştu:', error);
        // Hata durumunda kullanıcıya bilgi vermek için bir durum eklenebilir.
      }
    };

    fetchToplulukDetay();
  }, [toplulukId]);

  if (!topluluk) {
    return <div>Topluluk yükleniyor...</div>;
  }

  // Verilerin doğru geldiğinden emin olmak için, API'den gelen veri yapısına göre düzenleme yapın.
  return (
    <div>
      <h2>{topluluk.name}</h2>
      <p>Amaç: {topluluk.amac}</p>
      <p>Kuruluş Tarihi: {topluluk.kurulusTarihi}</p>
      {/* Diğer topluluk bilgilerini burada gösterebilirsiniz. */}
    </div>
  );
}

export default Detay;
