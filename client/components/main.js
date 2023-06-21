import React from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';
import gif from './4rv8-unscreen.gif';
const Main = () => {
    let n = useNavigate();
      function gocards(){
        n('/Restaurants')
      }
      function gosignup() {
        n('/SignUp');
      }
    
  return (<>
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
              <button className='btn4' onClick={gocards} >
                Go For Hunt
              </button>
              
            </div>
          </div>
          <div className='content-right1'>
            <img src={gif} alt='' />
          </div>
        </div>
      </section>
      

      

       <footer class=''>
       <div className='footer'>
        <div className='container'>
          <div className='content-left'>
            <p>SignUp to our App </p>
            <button className='btn4' onClick={gosignup}>
              SignUp
            </button>
          </div>
          <div className='content-right'>
            <p>Join us on Social Platforms</p>
            <div className='ft_icon'>
              <i class='bi bi-facebook'></i>
              <i class='bi bi-instagram'></i>
              <i class='bi bi-twitter'></i>
              <i class="bi bi-linkedin"></i>
            </div>
          </div>
        </div>
        <hr className='line'/>
        <div className='list_rest'>
          <div className='veg'>
            <ul><li>Rice</li>
            <li>Gopi Rice</li>
            <li>Noodles</li>
            <li>Roti</li>
            <li>Curies</li>
            </ul>
          </div>
          <div className='nonveg'>
            <ul><li>Mutton Biryani</li>
            <li>Chicken Biryani</li>
            <li>Mandi</li>
            <li>Special Non-veg curies</li>
          </ul></div>
          <div className='arabian'><ul><li>Special</li></ul></div>
          <div className='Bakery'>
            <ul><li>Cakes</li>
            <li>Pastry</li>
            <li>Donuts</li>
            <li>Desserts</li></ul></div>
          <div className='Shakes'><ul>
            <li>Milk Shakes</li>
            </ul></div>
        </div>
        <hr className='line'/>
        <div className='copy'>
          <div className='copy-size'>Food Hunt</div><p>Delivering Delights</p><p>
          copyright ©2023 All rights reserved</p>
        </div>
      </div>
      </footer>
       </>
  );
}

export default Main