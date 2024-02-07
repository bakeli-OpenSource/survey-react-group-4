import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/Login', {
        email: formData.email,
        password: formData.password
      });
      console.log(response.data);
      window.location.href = '/Dashboard';
      // Traitez la réponse de l'API ici (redirection, affichage de messages, etc.)
    } catch (error) {
      console.error(error.response.data);
      // Gérez les erreurs de l'API ici (affichage des messages d'erreur, etc.)
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <div className='logo2'></div>
      <Link to="/" className="logo2">RxDForm</Link>

      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>

        <div className="inputs">
          <div className="input">
            <input type="email" name="email" placeholder="E-mail" required onChange={handleChange} />
          </div>

          <div className="input">
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="submit-container">
        <div className="submit2"  onClick={handleLogin}>Login</div>
        {/* Lien ou bouton pour naviguer vers la page d'inscription */}
        
      </div>
       <div className='signup-links'>
      <p className='textes'>If you don't have an account ?</p>
        <Link to="/Signup" className="signup-link">Sign Up</Link>
        </div>
    </div>
  );
}
