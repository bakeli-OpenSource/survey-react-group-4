import React from 'react'
import LoginSignup from '../LoginSignup/LoginSignup'
import { useNavigate } from 'react-router-dom'
import head from '../Assets/head.png'
import users from '../Assets/users.png'
import head1 from '../Assets/users.png'
import part from '../Assets/part.png'
import './Welcome.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Footers from '../pages/Footers'
import About from '../pages/About'






export default function Welcome() {
    const navigate = useNavigate()
  return (
   <div className='blocs'>

     <div className='parent'>

      <div className='logo'>RxDForm</div>

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

    <div className='bolocs'>
     <div className='bloc1'>

       <h1>Hey, I'm a sample <br /> Sondage app</h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo commodi eveniet, et ab eos aspernatur.Illo commodi eveniet, et ab eos aspernatur.</p>
        <button onClick={()=> navigate('signe')}> Se connerter</button>
    </div>
    <div className='bloc2'>
      
         <img src={part} className='photos' alt="" />
   </div> 

   </div>
   <About />
   <Footers />
    </div>
  


    





  )

 
}

