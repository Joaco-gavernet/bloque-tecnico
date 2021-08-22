import React, { useEffect } from 'react';


// Styles
import './Hero.scss';


const Hero = () => {


  useEffect(() => {
    var counter = 1;
    setInterval(() => {
      document.getElementById('radio' + counter).checked = true;
      if (counter == 3) {
        counter = 1;
      } else {
        counter++;
      }
    }, 5000);
  }, [])


  return (
    <section className='home__hero'>

      <div className='slides'>
        <input type='radio' name='radio-btn' id='radio1' />
        <input type='radio' name='radio-btn' id='radio2' />
        <input type='radio' name='radio-btn' id='radio3' />

        <div className='slide first'>
          <img src='assets/slide-1-img.png' alt='' />
          <div className='info-box'>
            <h2 className='info-box__title'>Asesoramiento estratégico</h2>
            <p className='info-box__text'>Brindamos asesoramiento estratégico a las instituciones en el sector eléctrico gestionando proyectos normalizados y diseños de iluminación comerciales e industriales.</p>
            <div className='navigation-manual'>
              <label htmlFor='radio1' className='manual-btn' />
              <label htmlFor='radio2' className='manual-btn' />
              <label htmlFor='radio3' className='manual-btn' />
            </div>
          </div>
        </div>
        <div className='slide'>
          <img src='assets/slide-2-img.png' alt='' />
          <div className='info-box'>
            <h2 className='info-box__title'>Dirección de obra e instalaciones</h2>
            <p className='info-box__text'>
              Dirección de obra e instalaciones eléctricas completas con nuestros mejores técnicos a disposición.</p>
            <div className='navigation-manual'>
              <label htmlFor='radio1' className='manual-btn' />
              <label htmlFor='radio2' className='manual-btn' />
              <label htmlFor='radio3' className='manual-btn' />
            </div>
          </div>
        </div>
        <div className='slide'>
          <img src='assets/slide-3-img.png' alt='' />
          <div className='info-box'>
            <h2 className='info-box__title'>Certificaciones de conformidad</h2>
            <p className='info-box__text'>Certificaciones de conformidad en instalaciones residenciales, comerciales e industriales de hasta 2000 kw de potencia y mediciones con instrumentos calibrados/certificados tanto en Capital Federal como en la Provincia de Buenos Aires.</p>
            <div className='navigation-manual'>
              <label htmlFor='radio1' className='manual-btn' />
              <label htmlFor='radio2' className='manual-btn' />
              <label htmlFor='radio3' className='manual-btn' />
            </div>
          </div>
        </div>
      </div>

      <div className='navigation-manual'>
        <label htmlFor='radio1' className='manual-btn btn1' />
        <label htmlFor='radio2' className='manual-btn' />
        <label htmlFor='radio3' className='manual-btn' />
      </div>

    </section>
  );
}

export default Hero;