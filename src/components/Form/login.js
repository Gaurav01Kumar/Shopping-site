import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import "./loginpage.css";


export default class Login extends Component {
  render() {
    return (
        <div className='homeWrapper'>

        <Header/>
      <form>
        <h3 className='padclss'>Sign In</h3>
        <div className="mb-3 padclss">
          <label>Email address</label><br></br>
          <input
            type="email"
            className="form-control inputclass"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3 padclss">
          <label>Password</label><br></br>
          <input
            type="password"
            className="form-control inputclass"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3 padclss">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              &nbsp; Remember me
            </label>
          </div>
        </div>

        <div className="d-grid padclss">
          <button type="submit" className="btn btn-primary btnbox1 submitBtn">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">Password?</a>
        </p>
        <p className="forgot-password text-right">
          Not a Customer? <a href="/SignUp">Sign Up?</a>
        </p>
      </form>
      <Footer/>
      </div>
    )
  }
}