import React from 'react'
import Template from '../components/Template'
const Login = (props) => {
  return (
    <div>
      <Template 
                assests={props.assests} 
                formType = {'login'} 
                isLoggedIn = {props.isLoggedIn} 
                setIsLoggedIn={props.setIsLoggedIn}
                heading = "Welcome Back"
      ></Template>
    </div>
  )
}

export default Login

