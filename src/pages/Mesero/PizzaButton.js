import React from 'react';
import icono from './pizza.png';
import styles from './Mesero.module.css';

const PizzaButton = ({ pizza, price, setPrecio, setNombre, setContador }) => {
  const handleSend = () => {
    setPrecio(price);
    setNombre(pizza);
    setContador(prevCount => prevCount + 1);
  };

  return (
    <div>
      <button className={styles.btnPizza} onClick={handleSend}>
        <img className={styles.btnImage} src={icono} alt="img" />
        {pizza}
      </button>
    </div>
  );
};

export default PizzaButton;
