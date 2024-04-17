import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const RegistrationPage = () => {

    const [registrationData,setRegistrationData] = useState({
      username:'',
      password:''
    })

    const handleRegistrationChange = (e) => {
      const {name,value} = e.target;
      
      setRegistrationData((prevData) => ({
          ...prevData,
          [name] : value,
      }))
      
      }
      
      const handleRegistrationSubmit = async(e) => {
      e.preventDefault();
      try{
          const response = await axios.post('http://localhost:8000/register',registrationData);
          console.log(response.data);
      }
      catch(error){
          console.log(error)
      }
      setRegistrationData({
          username:'',
          password:'',
      })
      }
  return (
    <div>
      <div className='container'>
      <h1>Registration Page</h1>
        <form onSubmit={handleRegistrationSubmit}>
            <input type='text' name='username' value={registrationData.username} placeholder='Enter Username' onChange={handleRegistrationChange} required/>
            <input type='password' name='password' value={registrationData.password} placeholder='Enter Password' onChange={handleRegistrationChange} required/>

            <button type='submit'>REGISTER</button>
            <p>
                Already have an account ? <Link to='/login'>Login Here</Link>
            </p>
        </form>
        </div>
    </div>
  )
}

export default RegistrationPage