import React, { useState } from 'react'
import signinStyle from '../stylesheets/signin.module.css';
import { Link } from "react-router-dom";
import axios from 'axios'
const SignIn = () => {
    const [userEmail,setUserEmail]= useState('')
    const [password,setPassword]= useState('')
    const[isLoading,setIsLoading]= useState(false)
    const [error,setError]= useState(null)
    
    function onSubmit(){
        setError(null)
     setIsLoading(true);
    axios.post('https://safari-webstore-008.herokuapp.com')
    }
    return ( 
        <div className={signinStyle.container}>
            <div className={signinStyle.top}>
                <h3><strong>Hello there!</strong></h3>
                <small>Please sign in or create account to continue</small>
            </div>
            <div className={signinStyle.bottom}>
                <h5>Sign in</h5>
                <form className={signinStyle.form}>
                    <div className={signinStyle.formGroup}>
                    <label>
                      Email 
                    </label>
                    <input type="email" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} required/>
                    </div>
                    <div className={signinStyle.formGroup}>
                    <label>
                      Password
                    </label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
                    <div className={signinStyle.formGroup}>
                    <input type="checkbox"/>
                    <label>
                        Remember my details
                    </label>
                    </div>
                    <div className={signinStyle.formGroup}>
                    <input type="submit" onSubmit={onSubmit}/>
                    </div>
                    <Link to="/forgotPassword" className={signinStyle.forgotPassword}>
                    Forgot password
                    </Link>
                </form>
            </div>
        </div>
     );
}
export default SignIn;
