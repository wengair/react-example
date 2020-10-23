import React from 'react'
import Logo from '../images/chef_logo.png'
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className='nav-container'>
      <Link to='/'>
        <div className='logo-container'>
          <img src={Logo} alt='App Logo' className='logo-img' />
          <p className='logo-text'>Sous Chef</p>
        </div>
      </Link>
      <button className='login-btn'>Log in</button>
      <style jsx='true'>
        {`
        .nav-container {
          height: 120px;
          padding: 0px 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          text-decoration: none;
          align-items: flex-end;
        }

        .logo-img {
          height: 130px;
          margin-right: -10px;
        }

        .logo-text {
          font-family: Sedan;
          margin: 0px;
          font-size: 48px;
          color: var(--c-brown);
          text-decoration: none;
        }
        
        .login-btn {
          height: 30px;
          width: 80px;
          border: 2px solid var(--c-brown);
          border-radius: 20px;
          background-color: white;
          color: var(--c-brown);
          font-size: 18px;
          margin-right: 20px;
          cursor: pointer;
        }
        `}
      </style>
    </div>
  )
}

export default Nav
