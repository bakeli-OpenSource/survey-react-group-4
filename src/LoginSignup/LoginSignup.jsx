import React, { useState } from 'react'
import './LoginSignup.css'
import users from '../Assets/users.png'
import email from '../Assets/e-mail.png'
import password from '../Assets/password.png'
import head from '../Assets/head.png'
import Welcome from '../Compoents/Welcome'
import axios from 'axios'

 
  
 
export default function LoginSignup() {


  
  

  const [action,setAction] = useState("Sign Up");
  return (
    <div className='container'>
        <div className='logo2'>RxDForm</div>

<div className="header">
<div className="text">{action}</div>
<div className="underline"></div>

<div className="inputs">
  {action==="Login"?<div></div>:
   <div className="input">
   {/* <img src={users} className='photo' alt="" /> */}

   <input type="text"  placeholder= "Name"/>
 </div>}
 


  <div className="input">
    {/* <img src={email} className='photo' alt="" /> */}
    <input type="email" placeholder= "E-mail"  />
  </div>

  <div className="input">
    {/* <img src={password} className='photo' alt="" /> */}
    <input type="password" placeholder="password"  />
  </div>

  </div>
</div>



<div className="submit-container">
  <div className={action== "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
  {/* <div className={action === "Login" ? "submit2 gray" : "submit2"} onClick={handleLogin}>Login</div>

  <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleSignup}>Sign Up</div> */}

  <div className={action== "Sign Up"?"submit2 gray":"submit2"} onClick={()=>{setAction("Login")}}>Login</div>
</div>


    </div>


  );
}