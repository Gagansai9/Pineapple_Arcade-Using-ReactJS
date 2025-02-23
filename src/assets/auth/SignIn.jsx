import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import GoHome from "./GoHome";
import Logo from '../images/pineapple.jpeg';
import '../css/login.css'
import '../css/signin.css'
import '../css/header.css'


function SignIn(){
    const [value, setValue] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // Add this line to manage login state

    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email);
            setLoggedIn(true); // Set loggedIn to true after successful sign-in
        })
        .catch((error) => {
            console.error("Error signing in with Google:", error);
        });
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

    return (
        <div>
             <p className='login_back'>
                <div className="container">
                    <input type="checkbox" id="flip" />
                    <div className="cover">
                        <div className="front">
                            <img src={Logo} alt="login page" />
                        </div>
                        <div className="back">
                        </div>
                    </div>
                    <div className="forms">
                        <div className="form-content">
                            <div className="login-form">
                                <div className="title">Login
                                </div>
                                <form action="#">
                                    <div className="input-boxes">
                                        <div className="input-box">
                                            <i  className="fas fa-envelope">
                                            </i>
                                            <input type="text" value={"name@gmail.com"} required />
                                        </div>
                                        <div className="input-box">
                                            <i  className="fas fa-lock">
                                            </i>
                                            <input type="password" value={"123"} required />
                                        </div>
                                        <div className="text">
                                            <a href="#">Forgot password?</a>
                                        </div>
                                        <br />
                                        {value && !loggedIn && 
                                            <button type="button" className="login-with-google-btn" onClick={handleClick}>Signin with Google</button>
                                        }
                                        <br />
                                        <br />
                                        {value? <GoHome />:
                                            <button className="btn" onClick={handleClick}>Submit</button>
                                        }
                                        <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="signup-form">
                                <div className="title">Signup
                                </div>
                                <form action="#">
                                    <div className="input-boxes">
                                        <div className="input-box">
                                            <i className="fas fa-user">
                                            </i>
                                            <input type="text" placeholder="Enter your name" required />
                                        </div>
                                        <div className="input-box">
                                            <i  className="fas fa-envelope">
                                            </i>
                                            <input type="text" value={"name@gmail.com"} required />
                                        </div>
                                        <div className="input-box">
                                            <i  className="fas fa-lock">
                                            </i>
                                            <input type="password" value={"123"} required />
                                        </div>
                                        <br />
                                        {value && !loggedIn && 
                                            <button type="button" className="login-with-google-btn" onClick={handleClick}>Signin with Google</button>
                                        }
                                        <br />
                                        <br />
                                        <a href="/home">
                                            <button className="btn">Submit</button>
                                        </a>
                                        <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </p>
        </div>
    );
}

export default SignIn;
