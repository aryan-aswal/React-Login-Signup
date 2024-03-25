import React from 'react'
import Template from '../components/Template'
const Signup = (props) => {
  return (
    <div>
      <Template assests={props.assests} 
                formType = {props.formType}
                isLoggedIn = {props.isLoggedIn} 
                setIsLoggedIn={props.setIsLoggedIn}
                heading = "Join the millions learning to code with StudyNotion for free"
      ></Template>
    </div>
  )
}

export default Signup
