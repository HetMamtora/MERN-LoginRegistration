import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LoginPage'

const LoginPage = () => {

    const [loginData,setLoginData] = useState({
        username:'',
        password:''
    })

    //SUBMIT
    const handleLoginSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:8000/login',loginData);
            const {success,message} = response.data;

            if(success){
                console.log('Login Successful');
            }
            else{
                console.log(message);
            }
        }
        catch(error){
            console.error('Login Error: ',error);
        }

        setLoginData({
            username:'',
            password:''
        })
    }

    const handleLoginChange = (e) => {
        const {name,value} = e.target;
        
        setLoginData((prevData) => ({
            ...prevData,
            [name]:value
        }))
    }

  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleLoginSubmit}>
            <input type='text' name='username' value={loginData.username} placeholder='Enter Username' onChange={handleLoginChange} required/>
            <input type='password' name='password' value={loginData.password} placeholder='Enter Password' onChange={handleLoginChange} required/>

            <button type='submit'>Login</button>
            <p>
                Don't have account ? <Link to='/registration'>Register Here</Link>
            </p>
        </form>
    </div>
  )
}

export default LoginPage