import React, { useState, useEffect } from 'react';
import './style.css'; // Make sure to import the CSS file

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const openButton = document.getElementById('open');
    const closeButton = document.getElementById('close');
    const card = document.getElementById('card');

    const handleOpenClick = () => {
      setIsOpen(true);
      setTimeout(() => setIsOpen(false), 900000);
    };

    const handleCloseClick = () => {
      setIsOpen(false);
      setTimeout(() => setIsOpen(true), 900000);
    };

    openButton.addEventListener('click', handleOpenClick);
    closeButton.addEventListener('click', handleCloseClick);

    return () => {
      openButton.removeEventListener('click', handleOpenClick);
      closeButton.removeEventListener('click', handleCloseClick);
    };
  }, []);

  const script = `
    .....
    Hey King Subramani!
    Another year older? 
    Well, I could think of 
    worse things to be…
    like dead! 
    Happy Birthday 
    to my inspiration
    
    but the main thing is 
    you were born
    nice, Good Job!

    It's a tribute to you Mr.Coder😉
    ..........
              
  `;

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter + 1;
        if (newCounter > script.length) {
          clearInterval(intervalID);
        }
        return newCounter;
      });
    }, 90);

    return () => clearInterval(intervalID);
  }, [script]);

  return (
    <div id="card" className={isOpen ? 'open-fully' : ''}>
      <div id="card-inside">
        <div className="wrap">
          <div className="text">
            <pre>
              <style
                style={{ display: 'inline-block' }}
                className="code"
                contentEditable
              />
              {script.substring(0, counter)}
            </pre>
          </div>
        </div>
      </div>

      <div id="card-front">
        <div className="wrap">
          <h1>Happy Birthday!</h1>
          <div className="heart-icon" />
        </div>
        <button id="open">&gt;</button>
        <button id="close">&lt;</button>
      </div>
    </div>
  );
};

export default BirthdayCard;
