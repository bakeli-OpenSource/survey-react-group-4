import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des composants  itinéraires
import LoginSignup from './LoginSignup/LoginSignup';
import Welcome from './Compoents/Welcome';
import Footers from './pages/Footers';
import Login from './LoginSignup/Login';
import Signup from './LoginSignup/Signup';
import Formulaire from './sondage/Formulaire';
import Dashboard from './Dashboard';
import Liste_sondage from './sondage/Liste_sondage';
import { Form } from 'react-hook-form';




const App = () => {
  return (


    <Router>
        
      <Routes>
        <Route path="/" element={< Welcome />} />
       
        <Route path="sondage" element={< Formulaire />} />
        {/* <Route path="signes" element={< Footers />} /> */}
        <Route path="Login" element={< Login />} />
        <Route path="Signup" element={< Signup />} />
      
        <Route path="Dashboard" element={<Dashboard/>} />
         <Route path="liste_sondage" element={<Liste_sondage/>} /> 

        
      </Routes>
    </Router>
  );
};

export default App;
