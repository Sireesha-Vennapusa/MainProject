import {React,useState,useEffect} from "react";
import './style.css';
import axios from 'axios';
import { useNavigate ,useParams} from 'react-router-dom';

export const Profile1=()=>{
  
      const [data, setData] = useState({
   
    lastName: '',
    mobile: '',
    address:'',
  });
  const [pdata,setPdata]=useState([])
  const { id } = useParams();
  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
 
  let n = useNavigate();
  function goout(){
    n('/')
  }
const handleClick=async(e)=>{
    e.preventDefault();
    console.log(pdata)
    await axios.put(`http://localhost:8080/profile/insert/${pdata[0].id}`,data);
    n('/Login');
}
const loadData = async () => {
  try {
    const res = await axios.get(
      `http://localhost:8080/profile/insert`
    );
    console.log(res.data);
    setPdata(res.data.filter(item => item.lastName===localStorage.getItem("name")));
  } catch (error) {
    setPdata(error.response.data);
  }
};
useEffect(() => {
  loadData();
}, []);

    return(
<>
        
          <section class='grid'>
            <div className='content'>
            <form onSubmit={handleClick}>
              <div className='form3'>
                <h4>Update Profile</h4>
                
                <div className='mb-3 row'>
                  <label>FirstName</label>
                  <br />
                  <input type='name' name='firstName' onChange={handleChange} value={pdata.fisrtName} required />
                </div>
                <div className='mb-3 row'>
                  <label>LastName</label>
                  <br />
                  <input type='text' name='lastName' onChange={handleChange} value={pdata.lastName} required/>
                </div>
               
                <div className='mb-3 row'>
                  <label>Phone No.</label>
                  <br />
                  <input
                    type='text'
                    name='mobile'
                    onChange={handleChange} value={pdata.mobile} required
                  />
                </div>
                <div className="mb-3 row">
    <label  className="form-label">
      Address
    </label>
    <textarea
    type='text'
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={4}
      value={pdata.address}
      name="address"
     onChange={handleChange} required

    />
  </div><div style={{display:"flex" ,float:"right"}}>
                <button className='btn1' >
                  Submit
                </button>
                <button className='btn1' onClick={goout}>
                  Logout
                </button>
                </div>
              </div>
              </form>
            </div>
          </section>
        
      </>
    );
}