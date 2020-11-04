import React, {createContext, useState, useEffect} from 'react'

export const UserInfo = createContext(null)

function UserContext({children}) {
  // user is not logged in by default
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState()
  
  const info = {
    userName: userName,
  }

  // since React will lose all its state value if user refresh the page
  // I put user's info in local storage to keep user logged in if they refresh the page or come back next time
  const userLogIn = (name) => {
    setIsLoggedIn(true)
    setUserName(name)
    localStorage.setItem('accessToken', name)
  }
  
  const userLogOut = () => {
    setIsLoggedIn(false)
    setUserName('')
    localStorage.removeItem('accessToken')
  }

  // check whether local storage has user's info or not
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if(accessToken) {
      userLogIn(accessToken)
    }
  }, [])

  return (
    <UserInfo.Provider value={{info, isLoggedIn, userLogIn, userLogOut}}>
      {children}
    </UserInfo.Provider>
  )
}

export default UserContext
