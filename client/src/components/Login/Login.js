import { Alert, Button } from '@mui/material'
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignUp from './SignUp'

const Login = ({currentUser, setCurrentUser, errorMain, setErrorMain}) => {

  const [loggedIn, setLoggedIn] = useState(true)
  console.log(errorMain)

  const backgroundStyle = {
    backgroundColor: "#6c95e9",
    height: "100%"
  }



  return (
    <div style={backgroundStyle}>
    { loggedIn ? (
      <>
      <LoginForm setCurrentUser={setCurrentUser} setErrorMain={setErrorMain} errorMain={errorMain}/>
      <p>Don't have an account?</p>
      <Button onClick={() => setLoggedIn(false)}>SignUp</Button>
      </>
  ) : (
      <>
      <SignUp setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      <p>Already have an account?</p>
      <Button onClick={() => setLoggedIn(true)}>Login</Button>
      </>
  )}
  </div>
  )
}

export default Login