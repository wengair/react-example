import React from 'react'

function Footer({developer}) {
  console.log(developer,'developer')
  return (
    <div>
      {developer
        ? `Here's ${developer} speaking`
        : 'hello'}
    </div>
  )
}

export default Footer
