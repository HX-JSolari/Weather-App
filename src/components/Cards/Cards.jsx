import React from 'react';
import './Cards.css';
import Card from '../Card/Card.jsx';

export default function Cards({cities, onClose}) {

  return (
    <div>
    { cities <= 0 ? 
    (
      <div className='h2'>
        <strong><h2>BUSCA TU CIUDAD O PROVICIA FAVORITA</h2></strong>
      </div>
    
    ):
    (
      <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          temp={c.temp}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
    )
  }
  </div>
  );
}
