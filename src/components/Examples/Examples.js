import React from 'react';

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

      {/* elements boxes */}
    </section>
  );
}

export default Examples;