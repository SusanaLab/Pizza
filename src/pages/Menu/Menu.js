import styles from './Menu.module.css';
import React from 'react';
import data from '../../Data/data';
import PizzaButton from '../Mesero/PizzaButton';
const pizzas = data.pizza;

const Menu = () => {
  return (
    <>
    <h1> Menu </h1>
      <div className={styles.flavor}>
            {pizzas.map(pizza => (
              <PizzaButton
                key={pizza.id}
                price={pizza.price}
                pizza={pizza.name}
              />
            ))}
          </div>
    </>
  );
};

export default Menu;
