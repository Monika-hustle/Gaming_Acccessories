import React, { useEffect, useState } from 'react';
import './Account.css';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from backend or decode from localStorage
    const token = localStorage.getItem('accessToken');
    if (!token) {
      navigate('/login');
    }

    // Dummy data for now (replace with real API call)
    const dummyUser = {
      username: 'monika_rt',
      email: 'monika@example.com',
      joined: '2024-06-12',
    };

    setUser(dummyUser);
  }, [navigate]);

  return (
    <div className="account-container">
      <div className="account-box">
        <h2>My Account</h2>
        {user ? (
          <>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Joined On:</strong> {user.joined}</p>
            <button onClick={() => navigate('/ordered')}>View My Orders</button>
          </>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default Account;
