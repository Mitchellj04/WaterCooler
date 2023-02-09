import { Paper, Box, Grid, TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const SignUp = () => {

  const [username, setUsername] = useState('')
  const [fullname, setFullName] = useState('')
  const [age, setAge] = useState('')
  const [password, setPassword] = useState('')


  const fieldStyle = {
    margin: '5px auto'
  }
  const paperStyle ={
    padding: '30px 20px',
    width: 400, 
    margin: '100px auto'
}


  const handleSubmit = () => {
    const user = {
      username, 
      name: fullname,
      password,
      age
    }
  }
  return (
    <>
    <Grid>
      <Box>
        <Paper elevation={20} style={paperStyle}>
          <Typography>SignUp</Typography>
          <form onSubmit={handleSubmit}>
            <TextField 
              fullWidth 
              label="username"
              value={password} 
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
              label="username"
              value={password} 
              style={fieldStyle}
              onChange={(e) => setAge(e.target.value)}/>
            <TextField 
              fullWidth 
              label="username"
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