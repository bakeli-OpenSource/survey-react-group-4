import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios.get('http://localhost:8000/api/user', config)
        .then(response => setUser(response.data))
        .catch(error => console.error('Failed to fetch user:', error));
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      {/* Display other user data here */}
    </div>
    
  );
}

export default User;