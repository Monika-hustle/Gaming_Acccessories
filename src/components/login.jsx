import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const API_URL = import.meta.env.VITE_API_URL;

  // If user already logged in, redirect
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/login');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful! 🎉');
        setError('');
        console.log('✅ Logged in:', data);
        alert('Login successful!');

        // 🔐 Save user data to localStorage
        localStorage.setItem('user', JSON.stringify(data));

        navigate('/'); // ✅ Navigate only after successful login
      } else {
        setMessage('');
        setError(data.error || 'Invalid credentials. Please try again.');
        console.error('❌ Login error:', data);
        alert(data?.error || 'Login failed.');
      }
    } catch (err) {
      setMessage('');
      setError('Something went wrong. Please try again.');
      console.error('⚠️ Network Error:', err);
      alert('Network error. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>

        {message && <p className="success-msg">{message}</p>}
        {error && <p className="error-msg">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
        <p className="form-footer">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
