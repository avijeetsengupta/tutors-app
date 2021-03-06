import React from 'react'
import './Login.css'

const Login = (props) => {
    const { email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
     } = props;

     console.log(setEmail, email);
    
    return (
        <section className="login">
                <div className="loginContainer">
                    <label>Username</label>
                    <input 
                    type="text" 
                    autoFocus 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}    
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input 
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                       {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Login</button>
                        <p>
                        Dont have an account
                        <span onClick={() => setHasAccount(!hasAccount)}> Sign up</span></p>
                        </>
                       ): (
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>Have an account ? 
                        <span onClick={() => setHasAccount(!hasAccount)}> Sign in</span></p>
                        </>
                        )}
                        
                    </div>
                </div>
        </section>
    )
};

export default Login