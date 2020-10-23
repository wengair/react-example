import React from 'react'

function Footer({developer}) {
  return (
    <div className='footer-container'>
		<p className='footer-text'>OSU - CS561 Project</p>
		<style jsx='true'>
        {`
        .footer-container {
			height: 50px;
			padding: 0px 50px;
			display: flex;
			align-items: center;
			background-color: black;
			position:absolute;
			left:0;
			bottom:0;
			right:0;
        }
		
		.footer-text {
			font-family: Sedan;
			margin: 0 auto;
			text-align: center;
			font-size: 16px;
			color: var(--c-brown);
			text-decoration: none;
		}
        `}
      </style>
    </div>
  )
}

export default Footer
