import React from 'react';
import './Cards.css';
import Card from '../Card/Card.jsx';
import search from '../../img/search.gif';

export default function Cards({cities, onClose}) {

  return (
    <div>
    { cities <= 0 ? 
    (
      <div className='h2'>
        <div><strong><h2>Search For Your Favourite City & Check the Weather</h2></strong></div>
        <div><img src={search}  width="200" height="200" alt="No fig"></img></div>
      </div>
    
    )
    :
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
