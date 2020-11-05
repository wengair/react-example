import React from 'react'

// if message has something, display it
function FieldErrors({message}) {
  return (
    <>
      {message ? <p className='error-message'>{message}</p> : null}
      <style jsx='true'>
        {`
        .error-message {
          color: red;
          margin: 0px;
          height: 20px;
        }
        `}
      </style>
    </>
  )
}

export default FieldErrors
