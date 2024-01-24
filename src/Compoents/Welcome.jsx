import React from 'react'
import LoginSignup from '../LoginSignup/LoginSignup'
import { useNavigate } from 'react-router-dom'
import head from '../Assets/head.png'
import users from '../Assets/users.png'
import './Welcome.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





export default function Welcome() {
    const navigate = useNavigate()
  return (
   <div className='blo'>

     <div className='parent'>

      <div className='logo'>My sondage</div>

      <div>
    <nav className='navbar'>
        <ul>
        <li><a href="">Home</a> </li>
        <li><a href="">About-us</a> </li>
        <li><a href="">Contact </a></li>
        </ul>
    </nav>
    </div>

    </div>

     <div className='bloc1'>

       <h1>Hey, I'm a sample <br /> Sondage app</h1>
       <p>crate a count to b crate <br /> a form-sondage</p>
        <button onClick={()=> navigate('signe')}> Se connerter</button>
    </div>
    <div className='bloc2'>
         {/* <img src={head} className='photos' alt="" /> */}
   </div> 
     
  



   
    </div>




  )
}
