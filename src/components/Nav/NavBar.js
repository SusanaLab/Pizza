import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from './app.png';
import styles from './Nav.css';

const Navbar = ({ onPress }) => {
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <>
      <div className="blog-post-navbar">
        <div className="blog-post-brand">
          <a>
            <img src={image} alt="logo" width={80} height={80} />
          </a>
        </div>
        <ul>
          <li><button onClick={signIn} className="inicio">Iniciar sesión</button></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
