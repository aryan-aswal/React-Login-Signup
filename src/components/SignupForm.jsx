import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const SignupForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
    const naviate = useNavigate();
    const [accountType, setAccountType] = useState('student'); 
    const [ formData, setFormData ] = useState( {firstName: "" , lastName: "", email: "", createPassword: "", confirmPassword: ""} )
    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }

    function onChangeHandler(event) {
        const { name, value } = event.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function checkPassword() {
        if(formData.confirmPassword === formData.createPassword) {
            toast.success("Logged In");
            setIsLoggedIn(true);
            naviate('/dashboard');
        } else {
            toast.error("Passwords are not same");
        }
    }
  return ( 
    <div>
        <div className='flex bg-[#161d29] p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType === 'student' ? "bg-[#000814] text-[#f1f2ff] duration-200 py-2 px-5 rounded-full" : "bg-transparent text-[#999daa] px-5 py-2 transition-all duration-200 py-2 px-5 rounded-full" }`} onClick={()=>{setAccountType('student')}}>Student</button>
            <button className={`${accountType === 'instructor' ? "bg-[#000814] text-[#f1f2ff] duration-200 py-2 px-5 rounded-full" : "bg-transparent text-[#999daa] px-5 py-2 transition-all duration-200 py-2 px-5 rounded-full" }`} onClick={()=>{setAccountType('instructor')}}>Instructor</button>
        </div>

        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <div className='flex gap-x-4'>
                <div>
                    <label htmlFor="first-name" className='text-[0.875rem] text-[#f1f2ff] leadng'>First Name <sup className='text-pink-500'>*</sup></label>
                    <input className='w-full bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] p-[12px] border-b-2 border-[#2c333f]' type="text" name='firstName' value={formData.firstName} id='first-name' required placeholder='Enter first name' onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="last-name" className='text-[0.875rem] text-[#f1f2ff] leadng'>Last Name <sup className='text-pink-500'>*</sup></label>
                    <input className='w-full bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] p-[12px] border-b-2 border-[#2c333f]' type="text" name="lastName" id="last-name" placeholder='Enter last name' value={formData.lastName} required onChange={onChangeHandler} />
                </div>
            </div>

            <div>
                <label htmlFor="email" className='text-[0.875rem] text-[#f1f2ff] leadng'>Email Address <sup className='text-pink-500'>*</sup></label>
                <input className='w-full bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] p-[12px] border-b-2 border-[#2c333f]'type="email" name="email" id="email" placeholder='Enter email address' value={formData.email} required onChange={onChangeHandler}/>
            </div>

            <div  className='flex  gap-x-4'>
                <div>
                    <label htmlFor="create-password" className='text-[0.875rem] text-[#f1f2ff] leadng'>Create Password <sup className='text-pink-500'>*</sup></label>
                    <input className='w-full bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] p-[12px] border-b-2 border-[#2c333f]' type="password" name='createPassword' id='create-password' placeholder='Enter Password' value={formData.createPassword} onChange={onChangeHandler} required/>
                </div>
                <div>
                    <label htmlFor="confirm-password" className='text-[0.875rem] text-[#f1f2ff] leadng'>Confirm Password <sup className='text-pink-500'>*</sup></label>
                    <input className='w-full bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] p-[12px] border-b-2 border-[#2c333f]' type="password" name='confirmPassword' id='confirm-password' placeholder='Confirm Password' value={formData.confirmPassword} onChange={onChangeHandler} required/>
                </div>
            </div>

            <div>
                <button onClick={checkPassword} className='w-full bg-yellow-500 rounded-[8px] font-medium text-[#000814] px-[12px] py-[8px] mt-3'>Create Account</button>
            </div>
        </form>
    </div>
  )
}

export default SignupForm
