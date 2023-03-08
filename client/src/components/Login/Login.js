import { Alert, Button } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignUp from './SignUp'

const Login = ({currentUser, setCurrentUser, errorMain}) => {

  const [loggedIn, setLoggedIn] = useState(true)
  const userLoggedIn = useSelector((state) => state.user.loggedIn)
  const navigate = useNavigate()

  const backgroundStyle = {
    backgroundColor: "#6c95e9",
  }

  const divStyle = {
    margin: 100,
    padding: 25
  }


  if(userLoggedIn === true){ navigate('/')}
  return (
    <div style={backgroundStyle}>
    { loggedIn ? (
      <div style={divStyle}>
      {errorMain.map((err) => <Alert key="id" severity='error' style={{backgroundColor: "#6c95e9", color: 'white'}}>{err}</Alert>)}
      <LoginForm setCurrentUser={setCurrentUser}/>
      <p>Don't have an account?</p>
      <Button variant="secondary" sx={{color: 'secondary.light'}} onClick={() => setLoggedIn(false)}>SignUp</Button>
      </div>
  ) : (
      <div style={divStyle}>
      {errorMain.map((err) => <Alert key="id" severity='error' style={{backgroundColor: "#6c95e9", color: 'white'}}>{err}</Alert>)}
      <SignUp setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      <p>Already have an account?</p>
      <Button onClick={() => setLoggedIn(true)}>Login</Button>
      </div>
  )}
  </div>
  )
}

export default Login