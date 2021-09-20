import React, { useEffect, useState } from 'react';


// Styles
import './Examples.scss';


const Examples = () => {


  const [margin, setMargin] = useState('0');

  const checkMargin = (option) => {
    if (option == 'rightMove') {
      if (margin === '0') {
        setMargin('-33.33%')
      }
      if (margin === '-33.33%') {
        setMargin('-66.66%')
      }
    }

    if (option == 'leftMove') {
      if (margin === '-33.33%') {
        setMargin('0')
      }
      if (margin === '-66.66%') {
        setMargin('-33.33%')
      }
    }
  }

  useEffect(() => {

    var rightButtons = Array.from(document.querySelectorAll('.rightButton'));
    rightButtons.map(item =>
      item.addEventListener('click', () => checkMargin('rightMove'))
    )

    var leftButtons = Array.from(document.querySelectorAll('.leftButton'))
    leftButtons.map(item =>
      item.addEventListener('click', () => checkMargin('leftMove'))
    )

  })

  console.log('margin outside', margin);



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

            <div className='slide first' style={{ marginLeft: `${margin}` }} >
              <img src='assets/galery-1.png' alt='' />
              <div className='info-box'>
                <h2 className='info-box__title'>Equipos Industriales 18 toneladas</h2>
                <p className='info-box__text'>Revisión por salto de protección térmica. “Ventilador clavado”.</p>
                <div className='navigation-manual'>
                  <img className='leftButton' src='assets/left-row-inactive.png' alt='Flecha' />
                  <img className='rightButton' src='assets/right-row-active.png' alt='Flecha' />
                </div>
              </div>
            </div>

            <div className='slide'>
              <img src='assets/galery-2.png' alt='' />
              <div className='info-box'>
                <h2 className='info-box__title'>Este es otro ejemplo</h2>
                <p className='info-box__text'>Revisión por salto de protección térmica. “Ventilador clavado”.</p>
                <div className='navigation-manual'>
                  <img className='leftButton' src='assets/left-row-active.png' alt='Flecha' />
                  <img className='rightButton' src='assets/right-row-active.png' alt='Flecha' />
                </div>
              </div>
            </div>

            <div className='slide'>
              <img src='assets/galery-3.png' alt='' />
              <div className='info-box'>
                <h2 className='info-box__title'>Equipos Industriales 18 toneladas</h2>
                <p className='info-box__text'>Revisión por salto de protección térmica. “Ventilador clavado”.</p>
                <div className='navigation-manual'>
                  <img className='leftButton' src='assets/left-row-active.png' alt='Flecha' />
                  <img className='rightButton' src='assets/right-row-inactive.png' alt='Flecha' />
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