import React from "react";
import "./Cards.css";
import Card from "../Card/Card.jsx";

export default function Cards({ cities, onClose }) {
  return (
    <div>
      {cities <= 0 ? (
        <div className="h2">
          <div>
            <strong>
              <h2>Search For Your Favourite City & Check the Weather</h2>
            </strong>
          </div>
          <div>
            <img
              src="https://user-images.githubusercontent.com/85977287/136820985-cca4ba83-d998-4c57-8bd1-108ebbe56245.gif"
              width="200"
              height="200"
              alt="No fig"
            ></img>
          </div>
        </div>
      ) : (
        <div className="cards">
          {cities.map((c) => (
            <Card
              key={c.id}
              temp={c.temp}
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              id={c.id}
              onClose={() => onClose(c.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
