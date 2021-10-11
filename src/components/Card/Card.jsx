import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id, temp}) {
    return (

  <div className="body">
        <div class="container d-flex justify-content-center">
    <div class="weather">
        <div class="row">
            <div class=" col-md-6">
                <div class="card"> <span class="icon"><img class="img-fluid" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} /></span>
                    <div class="title">
                    <Link to={`/ciudad/${id}`} >
                       <p>{name}</p>
                    </Link>
                    </div>
                    <div class="temp">{`${parseInt(temp)}°C`}<sup>&deg;</sup></div>
                    <div class="row">

                        <div class="col-4">
                            <div class="header">Min</div>
                            <div class="value"><p>{`${parseInt(min)}°C`}</p></div>
                        </div>

                        <div class="col-4">
                            <div class="header">Max</div>
                            <div class="value">{`${parseInt(max)}°C`}</div>
                        </div>

                        <div class="col-4">
                            <div id="closeIcon" className="row">
                               <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 </div>  
  );
};
