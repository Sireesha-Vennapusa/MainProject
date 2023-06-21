import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import gif from './4rv8-unscreen.gif';
let disabled = true;
export const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  let n = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const res = await axios.get('http://localhost:8080/student/add');
    const chk = res.data.filter(
      (item) => item.email === data.email && item.password == data.password
    );
    if (chk.length) {
      disabled=false
      alert('successfully login');
      n('/Main');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      <section class='grid'>
        <div className='content'>
          <form onSubmit={handleClick} >
            <div className='form1'>
              <h4>Login</h4>

              <div className='mb-3 row'>
                <label>Email</label>
                <br />
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-3 row'>
                <label>Password</label>
                <br />
                <input
                  type='password'
                  name='password'
                  className='border-e-2'
                  onChange={handleChange}
                  required
                />
              </div>

              <button className='btn1'>Submit</button>
            </div>
          </form>
          <div className='content-right1'>
            <img src={gif} alt='' />
          </div>
        </div>
      </section>
    </>
  );
};
const Disable =()=>{
  return disabled;
}
export {Disable,disabled}