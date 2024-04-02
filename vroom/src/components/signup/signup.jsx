import React from 'react';
import './signup.css';

export default function Signup() {
    return (
        <div className="main">
            <div className="signup-form-container">
                <div className="signup-form">
                    <div className="signup-header">
                        <p className='signup-main-text'>VROOM Car Rental</p>
                        <p className='signup-sub-text'>Create an Account</p>
                    </div>
                    <div className="signup-textfields">
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder='Enter your full name' />

                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter your email' />

                        <label htmlFor="">Date of Birth</label>
                        <input type="date" className='input-date' />

                        <label htmlFor="">Username</label>
                        <input type="text" placeholder='Enter your username' />

                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Enter your password' />
                    </div>
                    <div className="signup-footer">
                        <button className='signup-btn'>Create Account</button>
                        <p>Already have an account? <span className='signup-to-login'>Sign in</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
