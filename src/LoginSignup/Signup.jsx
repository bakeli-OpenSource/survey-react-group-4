import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';




export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/Signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      console.log(response.data);
      window.location.href = '/Login';
      // Traitez la réponse de l'API ici (redirection, affichage de messages, etc.
    } 
    
    
    catch (error) {
      // console.error(error.response.data);
      // Gérez les erreurs de l'API ici (affichage des messages d'erreur, etc.)
      console.error(error);
    }


    
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  return (
    <div className='container'>
    <Link to="/" className="logo2">RxDForm</Link>

      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>

        <div className="inputs">
          <div className="input">
            <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
          </div>

          <div className="input">
            <input type="email" name="email" placeholder="E-mail" required onChange={handleChange} />
          </div>

          <div className="input">
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleSignup}>Sign Up</div>
      </div>
    </div>
  );
}
