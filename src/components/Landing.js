import React from 'react'
import BackgroundImg from '../images/splash1.jpg'

function Landing() {
  return (
    <div className='landing-container'>
      <img src={BackgroundImg} alt='splash img' className='bg-img' />
      <input type='text' className='landing-input'  placeholder='Enter ingredients here...' />
      <style jsx>
        {`
        .landing-container {
          width: 100vw;
          height: calc(100vh - 75px);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bg-img {
          height: 100%;
          width: 100%;
          opacity: 0.6;
          position: absolute;
        }

        .landing-input {
          font-size: 20px;
          width: 640px;
          height: 37px;
          z-index: 1;
          padding: 0px 15px;
          border-radius: 50px;
          border: 4px solid #D2AE69;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        `}
      </style>
    </div>
  )
}

export default Landing
