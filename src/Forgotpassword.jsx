import { useState } from "react";
import React from "react";

export const Forgotpassword = (props) =>{

    const [email, setEmail] = useState('');

    return(
        <div>
            <h2>Forgot your password</h2>
            <h4>Please enter your email address. A reset link will be sent to your email address.</h4>
            <form className="reset-password-form">
            <label htmlFor="email">email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@yahoo.com" id="email" name="email"/>
            </form>
        </div>
    )

}