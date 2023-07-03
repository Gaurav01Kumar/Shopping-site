import React, { Component,useState } from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import "./loginpage.css";

 const  SignUp=()=>{
    const [user,setUser]=useState({
      firstName:"",
      lastName:"",
      email:"",
      password:""
      
    })
    const handleClick=(e)=>{
      const {name,value}=e.target;
      setUser({
        ...user,[name]:value
      })
    }
    return (
        <div className='homeWrapper'>
<Header/>
        
      <form>
        <h3 className='padclss'>Sign Up</h3>

        <div className="mb-3 padclss">
          <label>First name</label>
          <input
            type="text"
            className="form-control inputclass"
            placeholder="First name" name='firstName' value={user.firstName} onChange={handleClick}
          />
        </div>

        <div className="mb-3 padclss">
          <label>Last name</label>
          <input type="text" className="form-control inputclass" placeholder="Last name"
          name='lastName' value={user.lastName} onChange={handleClick}
          />
        </div>

        <div className="mb-3 padclss">
          <label>Email address</label>
          <input
            type="email"
            className="form-control inputclass"
            placeholder="Enter email"
            name='eamil' value={user.email} onChange={handleClick}
          />
        </div>

        <div className="mb-3 padclss">
          <label>Password</label>
          <input
            type="password"
            className="form-control inputclass"
            placeholder="Enter password"
            name='password' value={user.password} onChange={handleClick}
          />
        </div>
        
        <div className="mb-3 padclss">
          <label>Confirm Password</label><br></br>
          <input
            type="password"
            className="form-control inputclass"
            placeholder="Confirm password"
          />
        </div>

        <div className="d-grid padclss">
          <button type="submit" className="btn btn-primary btnbox1">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">Sign In?</a>
        </p>
      </form>
      <Footer/>
      </div>
    )
  
}
export default SignUp