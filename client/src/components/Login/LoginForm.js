import { Alert, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const LoginForm = ({setCurrentUser, setErrorMain, errorMain}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [errors, setErrors] = useState([])


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
        const user = {
            username, 
            password
        }
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then((resp) => {
            if(resp.ok){
                resp.json()
                .then((data) => setCurrentUser(data)) 
            }
            else{
                resp.json().then((data) => setErrorMain(data.error))
            }
        })
    }


    console.log(errorMain)
  return (
    <>
        <Grid>
            <Box>
                <Paper elevation={20} style={paperStyle}>
                    <form onSubmit={handleSubmit}>
                        <Typography>Login</Typography>
                        <TextField 
                            fullWidth 
                            label="username"
                            value={username} 
                            style={fieldStyle}
                            onChange={(e) => setUsername(e.target.value)}/>
                        <TextField 
                            fullWidth 
                            label="password"
                            value={password} 
                            style={fieldStyle}
                            onChange={(e) => setPassword(e.target.value)}/>
                        <Button type="submit" variant='contained'>Submit</Button>
                        {errorMain.map((err) => <Alert key="id" severity='error'>{err}</Alert>)}
                    </form>
                </Paper>
            </Box>
        </Grid>
    </>
  )
}

export default LoginForm