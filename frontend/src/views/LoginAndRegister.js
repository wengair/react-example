import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AccountForm from '../components/AccountForm'
import {UserInfo} from '../components/UserContext'
import {config} from '../lib/config'
const urlJoin = require('url-join')

function LoginAndRegister() {
  const history = useHistory()
  // login
  const [loginEmail, setLoginEmail] = useState()
  const [loginpassword, setLoginPassword] = useState()
  const [loginParamErrors] = useState()
  // register
  const [registerEmail, setRegisterEmail] = useState()
  const [registerpassword, setRegisterPassword] = useState()
  const [registerParamErrors, setRegisterParamErrors] = useState()
  // get the user's information from context
  const userInfo = useContext(UserInfo)

  const onLoginSubmit = () => {
    userInfo.userLogIn(loginEmail)
    history.push('/')
  }
  
  const onRegisterSubmit = (e) => {
    e.preventDefault()
    fetch(urlJoin(config.sous.apiUrl, 'users', 'register'), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        userInfo: {
          email: registerEmail,
	        password:registerpassword,
        },
      }),
    })
      .then(res => res.json())
      .then(result => {
        if(result.ok) {
          // set user info to localstorage
          userInfo.userLogIn(registerEmail)
          history.push('/')
        }
        else {
          window.scrollTo(0, 0)
          setRegisterParamErrors(result.paramErrors)
        }
      })
      .catch(e => console.log(e))
  }

  return (
    <div className='container'>
      <div className='form-container'>
        <div>
          <p>Welcome Back!</p>
          <p>Sign In</p>
          {/* since the form part is repeated, I put them into another component */}
          <AccountForm 
            onSubmit={onLoginSubmit}
            paramErrors={loginParamErrors}
            buttonText='LOGIN'
            loginEmail={loginEmail}
            setEmail={setLoginEmail}
            loginpassword={loginpassword}
            setPassword={setLoginPassword}
          />
        </div>
        <div>
          <p>New to Sous Chef?</p>
          <p>Create New Account</p>
          <AccountForm 
            onSubmit={onRegisterSubmit}
            paramErrors={registerParamErrors}
            buttonText='SIGN UP'
            loginEmail={registerEmail}
            setEmail={setRegisterEmail}
            loginpassword={registerpassword}
            setPassword={setRegisterPassword}
          />
        </div>
      </div>
      <style jsx='true'>
        {`
        .container {
          height: calc(100vh - 190px);
        }

        .form-container {
          display: flex;
        }
        `}
      </style>
    </div>
  )
}

export default LoginAndRegister
