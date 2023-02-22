import { Paper, Box, Grid, TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../features/users/UserSlice'

const SignUp = () => {

  // REDUX 
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.users)
  console.log(user)

  //STATE
  const [newProfile, setNewProfile] = useState([])
  const [username, setUsername] = useState('')
  const [fullname, setFullName] = useState('')
  const [age, setAge] = useState('')
  const [password, setPassword] = useState('')
   const newUser = {
      username, 
      name: fullname,
      password,
      age
    }

  const fieldStyle = {
    margin: '5px auto'
  }
  const paperStyle ={
    padding: '30px 20px',
    width: 400, 
    margin: '100px auto'
}


  const handleSubmit = (e) => {
    e.preventDefault()
 
    fetch('/users', {
      method: "POST",
      headers: {"Content-Type": "Application/json"},
      body: JSON.stringify(user)
    })
    .then((resp) => resp.json())
    .then((newUser) => console.log(newUser))
  }

  const handleSubmitRedux = (e) => {
    e.preventDefault()
    dispatch(signup(newUser))
  }

  return (
    <>
    <Grid>
      <Box>
        <Paper elevation={20} style={paperStyle}>
          <Typography>SignUp</Typography>
          <form onSubmit={handleSubmitRedux}>
            <TextField 
              fullWidth 
              label="username"
              value={username} 
              style={fieldStyle}
              onChange={(e) => setUsername(e.target.value)}/>
            <TextField 
              fullWidth 
              label="fullname"
              value={fullname} 
              style={fieldStyle}
              onChange={(e) => setFullName(e.target.value)}/>
            <TextField 
              fullWidth 
              label="age"
              value={age} 
              style={fieldStyle}
              onChange={(e) => setAge(e.target.value)}/>
            <TextField 
              fullWidth 
              label="password"
              value={password} 
              style={fieldStyle}
              onChange={(e) => setPassword(e.target.value)}/>
            <Button variant="contained" type="submit">Signup</Button>
          </form>
        </Paper>
      </Box>
    </Grid>
    
    </>
  )
}

export default SignUp