import React from 'react'
import Logo from '../images/logo.png'

function Nav() {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <img src={Logo} alt='App Logo' className='logo-img' />
        <p className='logo-text'>Sous Chef</p>
      </div>
      <button className='login-btn'>Log in</button>
      <style jsx='true'>
        {`
        .nav-container {
          height: 75px;
          padding: 0px 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
        }

        .logo-img {
          height: 50px;
          margin: 0px 15px;
        }

        .logo-text {
          font-family: Sedan;
          margin: 0px;
          font-size: 48px;
          color: var(--c-brown);
        }
        
        .login-btn {
          height: 30px;
          width: 70px;
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
