import React from 'react';
import Logo from '../../img/heart.gif'
import SearchBar from '../Search/SearchBar';
import './Nav.css';
import{ Link } from 'react-router-dom';


function Nav({onSearch}) {

  return (
    <nav className="navbar navbar-dark bg-dark">
        <Link to='/Weather-App/'> 
          <span className="navbar-brand">
            <img id="heart" src={Logo} width="64" height="64" className="d-inline-block align-top" alt="" />
          </span>
        </Link>

        <SearchBar
          onSearch={onSearch}
        />
        
    </nav>
  );
};

export default Nav;
