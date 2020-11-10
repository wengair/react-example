import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AccountForm from '../components/AccountForm'
import {UserInfo} from '../components/UserContext'

function LoginAndRegister() {
  const history = useHistory()
  // login
  const [loginEmail, setLoginEmail] = useState()
  const [loginpassword, setLoginPassword] = useState()
  const [loginParamErrors] = useState()
  // register
  const [registerEmail, setRegisterEmail] = useState()
  const [registerpassword, setRegisterPassword] = useState()
  const [registerParamErrors] = useState()
  // get the user's information from context
  const userInfo = useContext(UserInfo)

  const onLoginSubmit = () => {
    userInfo.userLogIn(loginEmail)
    history.push('/')
  }
  
  const onRegisterSubmit = () => {
    userInfo.userLogIn(registerEmail)
    history.push('/')
  }

  return (
    <div className='container'>
    <div className='result-wrapper'>
      <div className='form-container'>
        <div class = "login">
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
        <div class = "vertical-col">
        </div>
        <div class = "account">
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
      </div>
      <style jsx='true'>
        {`
        .container {
          height: calc(100vh - 190px);
          text-align:center;
        }
        
		    .login {
		      text-align:left;
		      float: left;
		      width: 50%;
		      top: 900px;
		    }	
		    .account {
		      text-align:left;
		      float: right;
		      width: 50%;
		    }
		    
		    .vertical-col {
          height: 40%;
          width: 1px;
          background: black;
          position: absolute;
          left: 46%;
          } 
        
        .result-wrapper {
            display:inline-block;
		        width: 921px;
            height: 409px;
            left: 151px;
            top: 400px;
            background: rgba(252, 209, 127, 0.65);
            display: center;
      }

        .form-container {
          margin: 100px;
          height: 300px;
          text-align:center;
        }
        `}
      </style>
    </div>
  )
}

export default LoginAndRegister
