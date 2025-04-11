import React from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/assests/logo.png" alt="logo" />
      </div>

      <ul className="nav-links">
        <li><button onClick={() => navigate("/")}>Home</button></li>
        <li><button onClick={() => navigate("/product")}>Accessories</button></li>
        <li><button onClick={() => navigate("/cart")}>Cart</button></li>
        <li><button onClick={() => navigate("/ordered")}>Ordered</button></li>
        <li>
          <button onClick={() => navigate("/wishlist")}>
            <img className='img-navbar' src="/assests/wishlist.png" alt="Wishlist" />
          </button>
        </li>

        <li className="account-dropdown">
          <button className="dropdown-toggle">
            {isLoggedIn ? "My Account ⏷" : "Login ⏷"}
          </button>
          <ul className="dropdown-menu">
            {isLoggedIn ? (
              <>
                <li><button onClick={() => navigate("/account")}>Profile</button></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><button onClick={() => navigate("/login")}>Login</button></li>
                <li><button onClick={() => navigate("/signup")}>Sign Up</button></li>
              </>
            )}
          </ul>
        </li>

        <li><button onClick={() => navigate("/contact")}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
