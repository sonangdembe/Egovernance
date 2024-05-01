
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import SignupValidation from './SignupValidations';
import axios from 'axios';

function SignupForm (){

  const [values,setValues] = useState({
    name:'',
    phoneno : '',
password : ''
})
const navigate = useNavigate();
const [errors, setErrors] = useState({})
const  handleInput = (event)=>{
setValues(prev => ({ ...prev, [event.target.name]: [event.target.value]}))
}
const handleSubmit=(event) =>{
event.preventDefault();

setErrors(Validation(values));

}
if(errors.name === '' && errors.phoneno === '' && errors.password === '')
{
  axios.post('http://localhost:3000/signup',values)
  .then(res=> {
   navigate('/login');
  })
  .catch(res => console.log(err));
}

    return (
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25' >
            <h2>Sign-up</h2>
          <form action="" onSubmit={handleSubmit}>

          <div className='mb-3'>
              <label htmlFor="name"><strong>Name</strong></label>
              <input type="text" placeholder='enter name' name='name'   onChange={handleInput}  className='form-control rounded-0' />
              {errors.name && <span className='text-danger'> {errors.name}</span>}
            </div>

            <div className='mb-3'>
              <label htmlFor="phone no"><strong>Phone no</strong></label>
              <input type="number" placeholder='enter phone no' name='phoneno' onChange={handleInput}   className='form-control rounded-0' />
              {errors.phoneno && <span className='text-danger'> {errors.phoneno}</span>}
               </div>
  
            <div className='mb-3'>
              <label htmlFor="password"><strong>Password</strong></label>
              <input type="password" placeholder='enter password' name='password'  onChange={handleInput}    className='form-control rounded-0' />
              {errors.password && <span className='text-danger'> {errors.password}</span>}
            </div>

            <button type="submit" className='btn btn-success w-100 rounded-0'> <strong>signup</strong></button>
            <p>You are agree to our terms and conditions</p>
            <Link to ='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
          </form>
        </div>
      </div>
    );
}
export default SignupForm