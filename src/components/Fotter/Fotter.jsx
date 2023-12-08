import React from 'react'
import styles from './Fotter.module.css'
import facebook from './facebook.png'
import llamada  from './llamada.png'

const Fotter = () => {
  return (
    <footer className={styles.footer}>
      <p> Pizzeria  </p>
      <div className={styles.pic}>
      <a className={styles.icon} href='https://www.linkedin.com/in/susana-garcia-rodr%C3%ADguez-678342145' > <img  src={facebook} className="SocialNetwork"  alt="linkedin"  />  </a>
      <a className={styles.icon} href='https://github.com/SusanaLab/' > <img className="SocialNetwork" src={llamada} alt="github"  />    </a>
    </div>
    </footer>
  )
}

export default Fotter