import React from 'react'
import FieldErrors from './FieldErrors'

// the purpose of this component is adding an error message area for each form field
// so that the error message can be displayed properly beneath the corresponding field
function FormField({errorMsg, children}) {
  const classnames = (...names) => names.map(x => x?.trim()).join(' ')

  const classNameStr = classnames(
    'field',
    errorMsg && 'has-errors',
  )

  return (
    <div className={classNameStr}>
      {children}
      <FieldErrors message={errorMsg} />
      <style jsx='true'>
        {`
        // the css of children input (the red border) should be defined in globals.css
        // because the scope is outside of this component
        `}
      </style>
    </div>
  )
}

export default FormField
