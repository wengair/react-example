import React from 'react'

function Footer({developer}) {
  return (
    <div className='footer-container'>
		<p className='footer-text' id="test_footer_text">OSU - CS561 Project</p>
		<style jsx='true'>
        {`
        .footer-container {
			height: 50px;
			padding: 0px 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: black;
        }
		
		.footer-text {
			font-family: Sedan;
			margin: 0 auto;
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
