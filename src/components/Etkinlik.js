import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Etkinlik.css'; //

function Etkinlik() {
  const [etkinlikler, setEtkinlikler] = useState([]);
  const { toplulukId } = useParams();

  useEffect(() => {
    const fetchEtkinlikler = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/etkinlik/${toplulukId}`);
        setEtkinlikler(response.data);
      } catch (error) {
        console.error('Etkinlikler çekilirken hata oluştu:', error);
      }
    };

    fetchEtkinlikler();
  }, [toplulukId]);

  const handleKatil = (etkinlikId) => {
    console.log('Etkinlik ID:', etkinlikId);
  };

  return (
    <div>
      <h2>Etkinlikler</h2>
      {etkinlikler.length > 0 ? (
        <ul>
          {etkinlikler.map(etkinlik => (
            <li key={etkinlik.id}>
              <div className="etkinlik-adi-container">
                <h3 className="etkinlik-adi">{etkinlik.etkinlikAdı}</h3>
              </div>
              <div className="etkinlik-bilgileri">
                <p><strong>Yer:</strong> {etkinlik.etkinlikYeri}</p>
                <p><strong>Tarih:</strong> {etkinlik.etkinlikTarihi}</p>
              </div>
              <button onClick={() => handleKatil(etkinlik.id)}>Katıl</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Bu topluluk için etkinlik bulunamadı.</p>
      )}
    </div>
  );
}

export default Etkinlik;
