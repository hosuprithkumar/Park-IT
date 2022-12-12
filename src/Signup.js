import React from 'react';
import './App.css'

export default function Signup(){
    return (
        <div className='App'>
            <div className="auth-form-container">
            <h2><u>Sign Up</u></h2>
            <form className="signup-form" action='' method='POST'> 
             <label htmlFor="name">Full Name </label>
            <input type="text" placeholder="Full Name" id="name" name="name"/>
             <label htmlFor="ph_no"> Phone Number </label>
            <input type="text" placeholder="Phone Number" id="ph_no" name="ph_no"/>
            <label htmlFor="email">Email </label>
            <input type="email" placeholder="youremail@yahoo.com" id="email" name="email"/>
            <label htmlFor="password"> New Password </label>
            <input type="password" placeholder="*******" id="password" name="password"/>
            <br/>
            <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    )
}