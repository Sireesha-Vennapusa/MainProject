import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const [data, setData] = useState({
    lastName: '',
    mobile: null,
    address: '',
  });

  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  console.log(data);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/profile/insert', data);
    localStorage.setItem("name",data.lastName);
    navigate('/Login');
  };

  return (
    <>
      <section className='grid'>
        <div className='content'>
          <form onSubmit={handleClick}>
            <div className='form3'>
              <h4>Profile</h4>
              <div className='mb-3 row'>
                <label>FirstName</label>
                <br />
                <input type='name' name='firstName' onChange={handleChange} required />
              </div>
              <div className='mb-3 row'>
                <label>LastName</label>
                <br />
                <input type='text' name='lastName' onChange={handleChange} required />
              </div>
              <div className='mb-3 row'>
                <label>Phone No.</label>
                <br />
                <input type='text' name='mobile' onChange={handleChange} required />
              </div>
              <div className='mb-3 row'>
                <label className='form-label'>Address</label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows={4}
                  name='address'
                  onChange={handleChange}
                  required
                />
              </div>
              <button className='btn1'>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
