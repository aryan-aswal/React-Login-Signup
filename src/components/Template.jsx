import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
const Template = (props) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
      <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-[#f1f2ff] font-semibold text-[1.875rem] leading-[2.375rem'>{props.heading}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4 text-[#afb2bf]'>Build skills for today, tomorrow, and beyond.</p>
        <span className='text-[1.125rem] leading-[1.625rem] mt-4 text-[#47a5c5] italic'>Education to future-proof your career.</span>

        {
            props.formType === 'login' ? (<LoginForm isLoggedIn = {props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} />) : (<SignupForm  isLoggedIn = {props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn}/>)
        }
        
        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='w-full h-[1px] bg-[#2c333f]'></div>
          <p className='text-[#2c333f] font-medium leading-[1.375rem] '>OR</p>
          <div className='w-full h-[1px] bg-[#2c333f]'></div>
        </div>

        <button className='flex w-full justify-center rounded-[8px] items-center font-medium text-[#afb2bf] border border-[#2c333f] px-[12px] py-[8px] gap-x-2 mt-6'>
            <img src={props.assests.googleIcon} alt="" />
            Sign in with Google
        </button>
      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        {
            props.formType === 'login' ? <img src={props.assests.login} className='absolute -top-4 right-4'/> : <img src={props.assests.signup} className='absolute -top-4 right-4'/>
        }
        <img src={props.assests.background}/>
      </div>

    </div>
  )
}

export default Template
