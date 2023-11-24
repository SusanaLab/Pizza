import React, { useState } from 'react';
import PizzaButton from './PizzaButton';
import styles from './Mesero.module.css';
import data from '../../Data/data';

const pizzas = data.pizza;

const Mesero = () => {
  const [cliente, setCliente] = useState('');
  const [especific, setEspecific] = useState('');
  const [precio, setPrecio] = useState(0);
  const [nombre, setNombre] = useState('');
  const [contador, setContador] = useState(0);

  const handleInputCorreo = e => {
    setCliente(e.target.value);
  };

  const handleInputEspecific = e => {
    setEspecific(e.target.value);
  };

  return (
    <>
      {/* Resto del código ... */}
      <div className={styles.flavorDiv}>
        <div className={styles.flavor}>
          {pizzas.map(pizza => (
            <PizzaButton
              key={pizza.id}
              price={pizza.price}
              pizza={pizza.name}
              setPrecio={setPrecio}
              setNombre={setNombre}
              setContador={setContador}
            />
          ))}
        </div>
             <textarea value= {especific}  onChange={handleInputEspecific} placeholder='Ingresa aqui especificaciones' className={styles.textEnter} type="text" />
      </div>
      {/* Resto del código ... */}
      <td> {contador} pz</td>
      <td> ${precio * contador}</td>
      {/* Resto del código ... */}
    </>
  );
};

export default Mesero;

