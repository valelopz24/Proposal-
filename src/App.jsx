import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import PhotoCollage from './PhotoCollage.jsx';
import HeartConfetti from './HeartConfetti.jsx';

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noButtonText, setNoButtonText] = useState('No');
  
  const [yesButtonSize, setYesButtonSize] = useState(1); // Start with normal size

  const handleYesClick = () => {
    setYesClicked(true);
  };

  const handleNoHover = () => {
    const newX = Math.random() * (window.innerWidth - 150);
    const newY = Math.random() * (window.innerHeight - 150);
    
    const newNoCount = noCount + 1;
    setNoCount(newNoCount);
    setYesButtonSize(1 + newNoCount * 0.2);

    const newNoButtonScale = Math.max(1 - newNoCount * 0.1, 0.1);

    setNoButtonStyle({
      position: 'absolute',
      left: `${newX}px`,
      top: `${newY}px`,
      transform: `scale(${newNoButtonScale})`,
      transition: 'all 0.3s ease',
    });

    const responses = [
      "Naranjas", "¿Segura?", "Piénsalo otra vez", "Dale una oportunidad al sí", "Respuesta incorrecta", 
      "Casi... pero no", "¡El otro botón!", "¿Por qué no?", "Pero... :(", "No te hagas la difícil"
    ];
    setNoButtonText(responses[newNoCount % responses.length]);
  };

  return (
    <div className="container-valentine">
      {yesClicked && <HeartConfetti />}
      
      <div className="content">
        {yesClicked ? (
          <PhotoCollage />
        ) : (
          <>
            <img src="cat-love-you.gif" alt="Un lindo gatito para ti" style={{ maxWidth: '200px', marginBottom: '20px', borderRadius: '15px' }} />
            <h1 className="display-4 valentine-question">¿Quieres pasar el 14 de Febrero conmigo?</h1>
            <div className="buttons-container">
              <Button
                variant="danger"
                size="lg"
                onClick={handleYesClick}
                className="yes-button"
                style={{ transform: `scale(${yesButtonSize})` }}
              >
                Sí
              </Button>
              <Button
                variant="light"
                size="lg"
                style={noButtonStyle}
                onMouseEnter={handleNoHover}
                onClick={handleNoHover} // Also trigger on click for mobile
                className="no-button"
              >
                {noButtonText}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
