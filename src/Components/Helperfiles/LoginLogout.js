import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"
const LoginLogout = () => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return (<div className="login-wrapper cursor-pointer  text-center ">
            <button className="loginbutton rounded-lg border-none outline-none md:px-24 bg-blue-500 hover:bg-blue-600 text-white py-2 px-14">Loading...</button>
        </div>)
    }
    return (
        <div>
            {isAuthenticated ? (<Link to="/all-notes"><div className="login-wrapper cursor-pointer  text-center ">
                <button className="loginbutton rounded-lg border-none outline-none md:px-24 bg-blue-500 hover:bg-blue-600 text-white py-2 px-14">GO TO DASHBOARD</button>
            </div></Link>) : (<div onClick={() => loginWithRedirect()} className="login-wrapper cursor-pointer  text-center ">
                <button className="loginbutton rounded-lg border-none outline-none md:px-24 bg-blue-500 hover:bg-blue-600 text-white py-2 px-14">LOGIN / SIGNUP</button>
            </div>)}

        </div>
    )
}

export default LoginLogout
