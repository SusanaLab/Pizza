import React from 'react';
import dish from './dish.png';
import social from './social.png';
import './Landing.css';
import Carrousel from './Carrousel';

const Landing = () => {
  const latitud = 40.7128;
  const longitud = -74.0060;

  return (
    <div>
      <div className='landing-page'>
      <section className="landing-section">
        <h1>Pizza</h1>
        <p>¡Sumérgete en una explosión de sabores! Fusionamos la autenticidad italiana con la pasión de la gastronomía mexicana.</p>
        <button className="order-button">Ordenar</button>
        <img src={social} alt="Redes Sociales" className="social-image" />
      </section>
      <Carrousel/>
</div>
    {/*   <section className="landing-description">
        <h2>Sabores inigualables, momentos inolvidables</h2>
        <div className='dish-container'>
          <img src={dish} alt="Pizza" className="dish-image" />
          <p>Embárcate en un viaje culinario con nuestras irresistibles pizzas, donde cada porción es una explosión de sabores cuidadosamente seleccionados. En nuestra pizzería, transformamos ingredientes frescos en obras maestras del gusto que deleitarán tu paladar. Descubre el placer auténtico de la pizza perfecta, creada con pasión y servida con una sonrisa. Sumérgete en una experiencia gastronómica única que te hará volver por más.</p>
        </div>
      </section> */}

   {/*    <div className='horario'>

        <section className="landing-horario">
          <h3> Ciudad ejemplo  </h3>
          <p>123 Calle Ejemplo
            Colonia Imaginaria
            Ciudad Ficticia
            CP 12345
          </p>
          <h3> Horarios de Atención:  </h3>
          <p>Lunes a Viernes: 11:00 am - 10:00 pm
            Sábado y Domingo: 12:00 pm - 11:00 pm</p>
        </section>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33904.965467656424!2d-99.12298767520362!3d19.43306453884743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1701899106944!5m2!1ses!2smx"
          width="600"
          height="450"
          style={{ border: 30 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Landing;
