import React from 'react'
import FormField from './Form/FormField'

function AccountForm({onSubmit, paramErrors, buttonText, email, setEmail, password, setPassword}) {
  const buttonId = buttonText.toLowerCase().replace(' ', '-')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePassChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      {/* FormField is only for error message displaying, don't need to style it now */}
      <FormField errorMsg={paramErrors?.email?.message}>
        <input type="text" placeholder='Email' value={email} onChange={handleEmailChange} />
      </FormField>
      <FormField errorMsg={paramErrors?.password?.message}>
        <input type="text" placeholder='Password' value={password} onChange={handlePassChange} />
      </FormField>
      <button type='submit' className='form-confirm-btn' id={buttonId}>{buttonText}</button>
    </form>
  )
}

export default AccountForm
