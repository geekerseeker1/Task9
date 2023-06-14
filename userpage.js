import React, { useEffect, useState } from 'react';
import { getUserDetails } from './api'; 

const UserDetailPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const userDetails = await getUserDetails(token); 
        setUser(userDetails);
      } catch (error) {
        console.error('Failed to fetch user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetailPage;
