import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import img from "./logo1.png"
import { disabled } from './login';
const Nav = () => {
  const [disable,setdisabled]=useState(true);
    let n = useNavigate();
    function gohome() {
      if(disabled){
        n('/');

      }else{
        n('/Main')
      }
    }
  
    function goorders() {
      n('/Orders');
    }

    function goabout() {
      n('/Aboutus');
    }
    function goprofile() {
      n('/Profile1');
    }
  
  
  return (
    
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
        <img src={img}></img>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  onClick={gohome}
                >
                  Home
                </a>
              </li>
              <li className='nav-item'>
    
                  <button className='nav-link' onClick={goorders} disabled={disabled}>Orders</button>
                
              </li>
              <li className='nav-item'>
                <a className='nav-link active' onClick={goabout}>
                  About Us
                </a>
              </li>
            </ul>
          <div className='icon'>
          <i class='bi bi-search'></i>
            <i className='bi bi-person'  onClick={goprofile}/>
          </div>
        </div>
        </div>
      </nav>
  );
}

export default Nav
