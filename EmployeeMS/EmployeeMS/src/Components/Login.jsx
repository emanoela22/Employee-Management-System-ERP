import React from 'react'
import './style.css'


const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <h2>Login Page</h2>
            {/* Form to take input from user */}
            <form>
                {/* Input fields for email */}
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email:</strong></label>
                    <input type='email' name='email' autoComplete='off' placeholder='Enter Email'
                    className='form-content rounded-0' />
                </div>
                {/* Input fields for password*/}
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password:</strong></label>
                    <input type='password' name='password' placeholder='Enter Password'
                    className='form-content rounded-0' />
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Login</button>
                <div className='mb-1'>
                    <input type='checkbox' name='tick' id='tick' classname='me-2' />
                    <label htmlFor='password'>I agree to the Terms and Conditions</label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
