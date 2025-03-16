import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";  // ✅ Fixed import
import { useNavigate } from "react-router-dom";  // ✅ Fixed import
import GoHome from "./GoHome";
import Logo from '../images/pineapple.jpeg';
import '../css/login.css';
import '../css/signin.css';
import '../css/header.css';


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle Google Sign-In
    const handleGoogleSignIn = async () => {
        try {
            provider.setCustomParameters({ prompt: "select_account" });
            const result = await signInWithPopup(auth, provider);
            localStorage.setItem("email", result.user.email);
            navigate("/home"); // Redirect after login
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            setError("Google sign-in failed. Please try again.");
        }
    };

    // Handle Email & Password Sign-In
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("email", result.user.email);
            navigate("/home"); // Redirect after login
        } catch (error) {
            console.error("Sign-In Error:", error.message);
            setError("Invalid email or password.");
        }
    };

    // Check if already logged in
    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            navigate("/home");
        }
    }, [navigate]);

    return (
        <div className="login_back">
            <div className="container">
                <div className="cover">
                    <div className="front">
                        <img src={Logo} alt="Login Page" /> {/* Fixed Image Display */}
                    </div>
                </div>
                <div className="forms">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Login</div>
                            {error && <p className="error-message">{error}</p>}
                            <form onSubmit={handleSignIn}>
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                    <div className="input-box">
                                        <input 
                                            type="password" 
                                            placeholder="Enter your password" 
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                    <div className="text">
                                        <a href="#">Forgot password?</a>
                                    </div>

                                    {/* Google Sign-In Button */}
                                    <div className="google-btn-container">
                                        <button 
                                            type="button" 
                                            className="login-with-google-btn" 
                                            onClick={handleGoogleSignIn}
                                        >
                                            Sign in with Google
                                        </button>
                                    </div>

                                    <button className="btn">Submit</button>
                                    <div className="text sign-up-text">
                                        Don't have an account? <label htmlFor="flip">Signup now</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;