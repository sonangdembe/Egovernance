
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation'

function Login  () {

    const [values,setValues] = useState({
        phoneno : '',
    password : ''
})

const [errors, setErrors] = useState({})

const  handleInput = (event)=>{
  setValues(prev => ({ ...prev, [event.target.name]: [event.target.value]}))
}

const handleSubmit=(event) =>{
    event.preventDefault();
    setErrors(Validation(values));
}
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div action= "" className='bg-white p-3 rounded w-25' >
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="phone_no"><strong>Phone no</strong></label>
            <input type="number" placeholder='enter phone no' name='phoneno' 
            onChange={handleInput} className='form-control rounded-0' />
     {errors.phoneno && <span className='text-danger'> {errors.email}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='enter password' name='password' 
            onChange={handleInput} className='form-control rounded-0' />
            {errors.password && <span className='text-danger'> {errors.password}</span>}

          </div>
          <Link to ='/dashboard' className='btn btn-default boarder w-100 bg-light rounded-0 text-decoration-none w-100 rounded-'><strong>Login</strong></Link>
          {/* <Link <button type='submit' className='btn btn-success w-100 rounded-0'> <strong>Login</strong></button> */}
          <p>You are agree to our terms and conditions</p>
          <Link to ='/signup' className='btn btn-default boarder w-100 bg-light rounded-0 text-decoration-none'>Create Account </Link>
        </form>
       

      </div>
    </div>
  )
}

export default Login