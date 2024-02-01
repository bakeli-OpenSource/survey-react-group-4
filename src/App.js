import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des composants  itinéraires
import LoginSignup from './LoginSignup/LoginSignup';
import Welcome from './Compoents/Welcome';
import Footers from './pages/Footers';
import Login from './LoginSignup/Login';
import Signup from './LoginSignup/Signup';
import Formulaire from './sondage/Formulaire';
import { Form } from 'react-hook-form';


const App = () => {
  return (


    <Router>
        
      <Routes>
        <Route path="/" element={< Welcome />} />
<<<<<<< HEAD
        <Route path="signe" element={< Login />} />
        <Route path="signes" element={< Signup />} />
        <Route path="sondage" element={< Formulaire />} />
        {/* <Route path="signes" element={< Footers />} /> */}
=======
        <Route path="Login" element={< Login />} />
        <Route path="Signup" element={< Signup />} />
        <Route path="signes" element={< Footers />} /> 
        <Route path="Dashboard" element={<Dashboard/>} />

>>>>>>> 131e75fdb27bfe766dfe397ef066e85b013d5c94
        
      </Routes>
    </Router>
  );
};

export default App;
