import React from 'react';


// Styles
import './Examples.scss';


const Examples = () => {
  return (
    <section className='home__examples'>
      <h5 className='examples__title'>Con vasta experiencia y conocimientos en el área eléctrica sumamos horas trabajos realizados a lo largo de nuestra trayectoria</h5>
      <div className='examples__details'>
        <div className='details'>
          <h6 className='details__numbers'>425</h6>
          <p className='details__text'>Clientes</p>
        </div>
        <div className='details'>
          <h6 className='details__numbers'>231</h6>
          <p className='details__text'>Proyectos Terminados</p>
        </div>
        <div className='details'>
          <h6 className='details__numbers'>2640</h6>
          <p className='details__text'>Horas de Trabajo</p>
        </div>
        <div className='details'>
          <h6 className='details__numbers'>1589</h6>
          <p className='details__text'>Promedio de KW Ahorrados</p>
        </div>
      </div>

      {/* container */}
      <div className='container'>
        <h4 className='container__title'>Conozca los ultimos proyectos en que estuvimos trabajando </h4>
        {/* slide-view */}
        <div className='slide-view'>
          {/* slides */}
          <div className='slides'>
            <div className='slide first'>
              <img src='assets/galery-1.png' alt='' />
              <div className='info-box'>
                <h2 className='info-box__title'>Equipos Industriales 18 toneladas</h2>
                <p className='info-box__text'>Revisión por salto de protección térmica. “Ventilador clavado”.</p>
                <div className='navigation-manual'>
                  <img src='assets/left-row-inactive.png' alt='Flecha' />
                  <img src='assets/right-row-inactive.png' alt='Flecha' />
                </div>
              </div>
            </div>
            <div className='slide'>
              <img src='https://place-hold.it/510x380' alt='' />
              <div className='info-box'>
                <h2 className='info-box__title'>Equipos Industriales 18 toneladas</h2>
                <p className='info-box__text'>Revisión por salto de protección térmica. “Ventilador clavado”.</p>
                <div className='navigation-manual'>
                  <label htmlFor='radio1' className='manual-btn' />
                  <label htmlFor='radio2' className='manual-btn' />
                </div>
              </div>
            </div>
            <div className='slide'>
              <img src='https://place-hold.it/510x380' alt='' />
              <div className='info-box'>
                <h2 className='info-box__title'>Equipos Industriales 18 toneladas</h2>
                <p className='info-box__text'>Revisión por salto de protección térmica. “Ventilador clavado”.</p>
                <div className='navigation-manual'>
                  <label htmlFor='radio1' className='manual-btn' />
                  <label htmlFor='radio2' className='manual-btn' />
                </div>
              </div>
            </div>
          </div>
          {/* end slides */}
        </div>
        {/* end slide-view */}
        <button className='container__button'>
          Ver más
        </button>
      </div>
      {/* end container */}
    </section>
  );
}

export default Examples;