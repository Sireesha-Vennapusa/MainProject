import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import gif from './4rv8-unscreen.gif';

export const SignUp = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
 
  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  let n = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    /*const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (data.name === '') {
      alert('Name should not be empty');
    } else if (data.email === '') {
      alert('Email should not be empty');
    } else if (!email_pattern.test(data.email)) {
      alert("Email didn't match");
    } else if (data.password === '') {
      alert('Password should not be empty');
    } else if (!password_pattern.test(data.password)) {
      alert('password must contain atleast 8 characters and digits');
    }else{*/
      alert("You have successfully signed in")
      await axios.post('http://localhost:8080/student/add', data);
      n('/Profile');
    //}
  };
    return (
      <>
        
          <section class='grid'>
            <div className='content'>
            <form onSubmit={handleClick}>
              <div className='form'>
                <h4>SignUp</h4>
                <div className='mb-3'>
                  <label>UserName</label>
                  <br />
                  <input type='name' name='name' onChange={handleChange} required/>
                </div>
                <div className='mb-3'>
                  <label>Email address</label>
                  <br />
                  <input type='email' name='email' onChange={handleChange} required/>
                </div>
                <div className='mb-3'>
                  <label>Password</label>
                  <br />
                  <input
                    type='password'
                    name='password'
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className='btn1' >
                  Submit
                </button>
              </div>
              </form>
              <div className='content-right1'>
                <img src={gif} alt='' />
              </div>
            </div>
          </section>
       
      </>
    );
  }

