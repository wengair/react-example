import React from 'react'
import BackgroundImg1 from '../images/splash1.jpg'
import BackgroundImg2 from '../images/splash2.png'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Landing() {
  // import the image from src/images
  const imgs = [BackgroundImg1,
                BackgroundImg2]

  return (
    <div className='landing-container'>
      <div className='carousel-container'>
        <Carousel showThumbs={false} showStatus={false} showArrows={false} infiniteLoop autoPlay={true} dynamicHeight={false}>
          {/* generate img tags for Carousel to show */}
          {imgs.map((imgurl, idx) => <img src={imgurl} alt='image' key={idx} className='slide-img' />)}
        </Carousel>
      </div>
      <input type='text' className='landing-input'  placeholder='&#xf002;  Enter ingredients here...' />
      <style jsx='true'>
        {`
        .landing-container {
          width: 100vw;
          height: calc(100vh - 75px);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-container {
          height: 100%;
          width: 100%;
          opacity: 0.6;
          position: absolute;
        }
        
        .slide-img-container{
          overflow: hidden; 
          object-fit: cover;
          height: 100%;
        }

        .slide-img {
          height: calc(100vh - 75px);
          object-fit: cover;
        }

        .landing-input {
          font-family: system-ui, 'Font Awesome 5 Free';
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
