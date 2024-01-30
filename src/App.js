import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importez les composants que vous souhaitez utiliser dans les itinéraires
import LoginSignup from './LoginSignup/LoginSignup';
import Welcome from './Compoents/Welcome';
import Footers from './pages/Footers';
import Login from './LoginSignup/Login';
import Signup from './LoginSignup/Signup';


const App = () => {
  return (
   

    <Router>
        
      <Routes>
        <Route path="/" element={< Welcome />} />
        <Route path="signe" element={< Login />} />
        <Route path="signes" element={< Signup />} />
        {/* <Route path="signes" element={< Footers />} /> */}
        
      </Routes>
    </Router>
  );
};

export default App;
