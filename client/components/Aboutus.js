import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import img from './plate1.png';
export const Aboutus= () => {
  let n = useNavigate();
  
  return (
    <>
      {/* Hello world */}
      
     <section class='grid'>
      <div className='content'>
        <div className='content-left'>
          <div className='info'>
            <h2>About Us</h2>
            <p>Welcome to Food Hunt. At Food Hunt, we are passionate about connecting you with an extensive selection of culinary delights, delivered right to your doorstep. Our mission is to make your dining experience hassle-free, allowing you to indulge in mouthwatering meals from your favorite restaurants without leaving the comfort of your home or office
            </p>
          </div>
        </div>
        <div className='content-right'>
          <img src={img} alt=''/>
        </div>
      </div>
     </section>
    </>
  );
};