import React from 'react';
import "./login.css"

const Login = () => {
    const submitHandler =(e)=>{
        e.preventDefault();
        console.log("e", e)
    }
  return (
    <div className='login-root'>
      <form onSubmit={submitHandler} className='form-submit'>
        <input className='input-form' placeholder='Enter your email' />
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Login
