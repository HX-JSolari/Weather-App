import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  
  const [city, setCity] = useState("");

  return (
    
     <div class="main-search-input-wrap">
        <div class="main-search-input fl-wrap">
            <div class="main-search-input-item"> 
            <form onSubmit={(e) => {
               e.preventDefault();
              onSearch(city);
              }}>
            <input 
            type="text" 
            value={city} 
            placeholder="Search Products..."
            onChange={e => setCity(e.target.value)} 
            />
          <button class="main-search-button">Search</button>
          </form> 
        </div>  
      </div>
    </div>
   
  );
}
