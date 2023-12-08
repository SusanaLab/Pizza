import React from 'react';
import errorImage from './error.png';
import './Error.css';  

const Error = () => {
  return (
    <div className="error-container">
      <img src={errorImage} alt="Error" className="error-image" />
      <h1 className="error-message">Página no encontrada</h1>
    </div>
  );
};

export default Error;
