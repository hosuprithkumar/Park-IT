import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'


export default function Signin(){
    const navigate = useNavigate()
    function signin(){
        localStorage.setItem("token", "qwerty")
        navigate('/home')
        window.location.reload()
    }
    return  (
    <div className='App'>
    <div className="auth-form-container">
        <h2><u>Sign In</u></h2>
        <div className="signin-form">
            <label htmlFor="email">Email </label>
            <input type="email" placeholder="youremail@yahoo.com" id="email"/>
            <label htmlFor="password"> New Password </label>
            <input type="password" placeholder="*******" id="password"/>
            <br/>
            <button type="submit" onClick={signin}>Sign In</button>
        </div>
    </div>
    </div>
)}

