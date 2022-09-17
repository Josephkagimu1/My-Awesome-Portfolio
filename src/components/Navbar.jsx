import React from 'react';
import './Navbar.css';
import Toggle from './Toggle/Toggle';

import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);


  function Refresh() {
    window.location.reload(false);
  }

  return (
    <div className="n-wrapper">

        <div className="n-left">
        <div className="n-name" onClick={Refresh} > Joseph </div>
        <Toggle />
        
        </div>
        <div className="n-right">
        <div className="n-list">
        
        {show ? (
            <button 
            className='nav-btn'
            onClick={() => setShow(false)}
            > close </button>
        ) : (
          <button 
            className='nav-btn'
            onClick={() => setShow(true)}
            > Nav </button>
        )}
        

          {show ? (
            <ul style={{listStyleType: 'none'}}>

            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
              <li>Home</li>
            </Link>
            
            <Link spy={true} to='Services' smooth={true} >
              <li>Services</li>
            </Link>
            
            <Link spy={true} to='Experience' smooth={true} >
              <li>Experience</li>
            </Link>

            <Link spy={true} to='Portfolio' smooth={true} >
              <li>Portifolio</li>
            </Link>

            <Link spy={true} to='Testimonials' smooth={true} >
              <li>Testimonials</li>
            </Link>
            
        </ul>
          ) : null }
            
        </div>

        <Link spy={true} to='Contact-form' smooth={true} >
          <button className="button"> contact </button>
        </Link>

        </div>

    </div>
  )
}

export default Navbar;