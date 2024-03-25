import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
const LoginForm = (props) => {
    let isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;

    const [formData, setFormData] = useState( {email: "", password: ""} )

    function onChangeHandler (event) {
        const { name, value } = event.target;
        setFormData((prev) =>{
            return {
                ...prev,
                [name]: value
            }
        }) 
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }
    
  return ( 
    <div>
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <div className='w-full'>
                <label htmlFor="email" className='text-[0.875rem] text-[#f1f2ff] leadng'>Email Address <sup className='text-pink-500'>*</sup></label>
                <input className='w-full bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] p-[12px] border-b-2 border-[#2c333f]' type="email" id='email' name='email' value={formData.email} onChange={onChangeHandler} placeholder='Enter Email Address'/>
            </div>
            <div className='w-full'>
                <label htmlFor="pass"  className='text-[0.875rem] text-[#f1f2ff] leadng'>Password <sup className='text-pink-500'>*</sup></label>
                <input className='w-full bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] p-[12px] border-b-2 border-[#2c333f]' type="password" id='pass' name='password' value={formData.password} onChange={onChangeHandler} placeholder='Enter Password'/>
                <span className='right-3 top-[38px] cursor-pointer text-[#47a5c5] float-end'>forgot password</span>
            </div>
            <div>
                <Link to='/dashboard'><button onClick={()=>{
                    setIsLoggedIn(true)
                    toast.success("Logged In")
                    }} className='w-full bg-yellow-500 rounded-[8px] font-medium text-[#000814] px-[12px] py-[8px]'>Sign In</button></Link>
            </div>
        </form>
    </div>
  )
}

export default LoginForm
