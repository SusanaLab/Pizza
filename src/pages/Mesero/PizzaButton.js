import React from 'react';
import icono from './pizza.png';
import styles from './Mesero.module.css';

const PizzaButton = ({ pizza, price, setPrecio, setNombre, setContador, agregarPizzaOrden  }) => {
  const handleSend = () => {
    setPrecio(price);
    setNombre(pizza);
    setContador(prevCount => prevCount + 1);  
       agregarPizzaOrden();
  };

  return (
    <div>
      <button  className={styles.btnPizza} onClick={handleSend}>
        <img className={styles.btnImage} src={icono} alt="img" />
       <h3>{pizza} </h3>   
       <h4>{price}</h4>
       
      </button>
    </div>
  );
};

export default PizzaButton;

