import React, { useState, useEffect } from 'react';
import './PhotoCollage.css';

const images = [
  './v1.JPG', './v2.jpeg', './v3.jpeg', './v4.jpeg', './v5.jpeg', 
  './v6.jpeg', './v7.jpg', './v8.jpeg', './v9.jpeg', './v10.jpeg', 
  './v11.jpeg', './v12.jpeg', './v13.jpeg'
];

const PhotoCollage = () => {
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [showDedication, setShowDedication] = useState(false);

  useEffect(() => {
    // Show photos one by one
    images.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePhotos(prev => [...prev, index]);
      }, (index + 1) * 600); // 600ms delay between photos
    });

    // Show dedication after all photos are visible
    setTimeout(() => {
      setShowDedication(true);
    }, (images.length + 1) * 600);

  }, []);

  const openSpotify = () => {
    window.open('https://open.spotify.com/intl-es/track/5RJot1fR8C90lLXzHtUqpo?si=23b666865f624c5f', '_blank');
  };

  return (
    <div className="collage-container">
      <div className="collage-heart-shape">
        {images.map((src, index) => (
          <div
            key={src}
            className={`photo-wrapper photo-${index + 1} ${visiblePhotos.includes(index) ? 'visible' : ''}`}
          >
            <img src={src} alt={`Collage photo ${index + 1}`} />
          </div>
        ))}
      </div>

      {showDedication && (
        <div className="dedication-text fade-in">
          <h1 className="display-4 valentine-question">¡ESOOOOOO mi reinita bien por elegir que si!</h1>
          <p className="lead mt-4">"Eres la ruina de mi existencia y el objeto de todos mis deseos."</p>
          <p className="lead fw-bold">Con mucho cariño, para mi reinita petocha ❤️</p>
          <button className="spotify-button" onClick={openSpotify}>
            Para ti mi vida 🎀
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoCollage;
