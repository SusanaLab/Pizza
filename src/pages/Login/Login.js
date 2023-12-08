import React, { useState } from 'react';
import styles from './Login.module.css';
import pi from './pic.jpg';
import { useNavigate } from 'react-router-dom';
import { fire } from '../../secrets.js'; 

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const navigate = useNavigate();

  const handleInputCorreo = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setCorreo(value);
  };

  const handleInputContraseña = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setContraseña(value);
  };

 const SingIn = async (e) => {
  e.preventDefault();

  try {
    const userCredential = await fire.auth().signInWithEmailAndPassword(correo, contraseña);
    const user = userCredential.user;

    console.log("Signed in");
    console.log(user?.email);

    switch (user.email) {
      case "administrador@pizza.com":
        navigate("/administrador");
        break;
      case "cocina@pizza.com":
        navigate("/cocina");
        break;
      case "mesera@pizza.com":
        navigate("/mesera");
        break;
      default:
        console.log("Usuario no reconocido");
    }
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.error("Error al iniciar sesión:", errorCode, errorMessage);
    
  }
};


  return (
    <div className={styles.container}>
        <img className={styles.logo} src={pi} alt="Logo"  />
      <div className={styles.loginContainer}>
        <h1 className={styles.welcome}>Bienvenido</h1>
        <form className={styles.loginForm}>
          <h2 className={styles.label}>Usuario</h2>
          <input
            className={styles.input}
            value={correo}
            onChange={handleInputCorreo}
            type="text"
            placeholder="example@gmail.com"
          />
          <h2 className={styles.label}>Contraseña</h2>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={contraseña}
            onChange={handleInputContraseña}
            placeholder="**********"
          />
        </form>
        <button className={styles.loginButton} onClick={SingIn}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
