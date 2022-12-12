import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(){
    const [token, setToken] = useState("")

    useEffect(()=>{
      setToken(localStorage.getItem("token"))
    })
    function logout(){
        localStorage.setItem("token","")
        window.location.reload()
    }
    
    return <nav className="nav">
        <Link to="/" className="site-title"> Park It</Link>
        <ul>
            {token?
            <>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink onClick={logout}>Logout</CustomLink>
            </>
            :
            <>
                <CustomLink to="/signin">Signin</CustomLink>
                <CustomLink to="/signup">Signup</CustomLink>
            </>
            }
           
           
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return(
        <li className={path === href ? "active" : ""}>
            <Link to={href} {...props}>{children}</Link>
        </li>
    )
}