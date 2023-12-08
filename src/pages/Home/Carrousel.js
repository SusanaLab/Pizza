import React, { useState } from 'react';
import pizzaImage from './pizzaCarrousel.png';
import data from '../../Data/data';
import './Carrousel.css';

const pizzas = data.pizza;

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pizzas.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pizzas.length - 1 ? 0 : prevIndex + 1));
  };

  const currentPizza = pizzas[currentIndex];

  return (
    <div className="carrousel-container">
      <div className='pizzaImagen'>
        <img src={pizzaImage} alt="Pizza" className="pizza-image" />
        <p className='precio'>${currentPizza.price}</p>
      </div>
      <div className='arrow'>
        <button onClick={goToPrevious} className="arrow-button">
          {'<'}
        </button>
        <div className='text'>
          <h1>{currentPizza.name}</h1>
          <p>{currentPizza.description}</p>
        </div>

        <button onClick={goToNext} className="arrow-button">
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
