import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const TopBar = () => {
  const username = localStorage.getItem('username');
  const { isLoggedIn } = useAuth();
  const { cart } = useCart();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  return (
    <nav className="topBarSection">
      <div className="companyTitle">
        <Link to='/' className='link'>
          <h2>QUICK</h2>
        </Link>
      </div>
      <div className="centerContent">
        {username && <span className="username">Hi, {username}</span>}
      </div>
      <div className="userAuth">
        <Link to='/cart' className='link'>Cart ({cart.length})</Link>
        {username ? (
          <button className="logoutButton" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to='/login' className='link'>
            Login / SignUp
          </Link>
        )}
      </div>
    </nav>
  );
};

export default TopBar;