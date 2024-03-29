import { Paper, Box, Grid, TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../Redux/users/UserSlice'

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
  const paperStyle = {
    padding: '50px 40px',
    width: 400,
    margin: '100px auto',
    alignItems: 'center'
  }


  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   fetch('/users', {
  //     method: "POST",
  //     headers: { "Content-Type": "Application/json" },
  //     body: JSON.stringify(user)
  //   })
  //     .then((resp) => resp.json())
  //     .then((newUser) => console.log(newUser))
  // }

  const handleSubmitRedux = (e) => {
    e.preventDefault()
    dispatch(signup(newUser))
  }

  return (
    <>
      <Box>
        <Paper elevation={20} style={paperStyle}>
          <Typography>SignUp</Typography>
          <form onSubmit={handleSubmitRedux}>
            <TextField
              autoFocus
              fullWidth
              variant="standard"
              label="username"
              value={username}
              style={fieldStyle}
              onChange={(e) => setUsername(e.target.value)} />
            <TextField
              fullWidth
              variant="standard"
              label="fullname"
              value={fullname}
              style={fieldStyle}
              onChange={(e) => setFullName(e.target.value)} />
            <TextField
              fullWidth
              variant="standard"
              label="age"
              value={age}
              style={fieldStyle}
              onChange={(e) => setAge(e.target.value)} />
            <TextField
              fullWidth
              variant="standard"
              label="password"
              type={"password"}
              value={password}
              style={fieldStyle}
              onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" type="submit" style={{ margin: 15, alignItems: "Left" }}>Signup</Button>
          </form>
        </Paper>
      </Box>
    </>
  )
}

export default SignUp