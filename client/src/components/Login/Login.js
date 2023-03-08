import { Alert, Button } from '@mui/material'
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignUp from './SignUp'

const Login = ({currentUser, setCurrentUser}) => {

  const [loggedIn, setLoggedIn] = useState(true)

  const backgroundStyle = {
    backgroundColor: "#6c95e9",
  }

  const divStyle = {
    margin: 100,
    padding: 25
  }



  return (
    <div style={backgroundStyle}>
    { loggedIn ? (
      <div style={divStyle}>
      <LoginForm setCurrentUser={setCurrentUser}/>
      <p>Don't have an account?</p>
      <Button variant="secondary" sx={{color: 'secondary.light'}} onClick={() => setLoggedIn(false)}>SignUp</Button>
      </div>
  ) : (
      <div style={divStyle}>
      <SignUp setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      <p>Already have an account?</p>
      <Button onClick={() => setLoggedIn(true)}>Login</Button>
      </div>
  )}
  </div>
  )
}

export default Login