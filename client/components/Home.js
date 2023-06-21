import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import gif from './4rv8-unscreen.gif';
export const Home = () => {
  let n = useNavigate();
  function gosignup() {
    n('/SignUp');
  }
  function gologin() {
    n('/Login');
  }
  return (
    <>
      {/* Hello world */}
      <section class='grid'>
        <div className='content'>
          <div className='content-left'>
            <div className='info1'>
              <h4>Delivering Delights</h4>
              <h2>Food Hunt</h2>
              <p>
                Food Hunt Food Delivery is here to make your dining experience
                seamless and delightful. Simply explore, order, and savor the
                joy of good food, delivered fresh and fast
              </p>
              <button className='btn4' onClick={gosignup}>
                Sign Up
              </button>
              <button className='btn4' onClick={gologin}>
                Login
              </button>
            </div>
          </div>
          <div className='content-right1'>
            <img src={gif} alt='' />
          </div>
        </div>
      </section>
      
    </>
  );
};
