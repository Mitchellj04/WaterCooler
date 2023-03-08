import { Alert, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/users/UserSlice'

const LoginForm = () => {

    //REDUX
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user.users)
    const errors = useSelector((state) => state.user.errors)

    console.log(user)
    console.log(errors)


    //REACT STATE
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const userData = {
        username,
        password
    }

    // STYLE
    const fieldStyle = {
        margin: '5px auto'
      }
      const paperStyle ={
        padding: '30px 20px',
        width: 400, 
        margin: '100px auto'
    }


    const handleSubmitRedux = (e) => {
        e.preventDefault()
        dispatch(login(userData))  
    }

  return (
    <>
        <Grid>
            <Box>
                <Paper elevation={20} style={paperStyle}>
                    <form onSubmit={handleSubmitRedux}>
                        <Typography>Login</Typography>
                        <TextField 
                            required
                            autoFocus
                            variant='standard'
                            fullWidth 
                            label="username"
                            value={username} 
                            style={fieldStyle}
                            onChange={(e) => setUsername(e.target.value)}/>
                        <TextField 
                            required
                            fullWidth 
                            variant='standard'
                            type={'password'}
                            label="password"
                            value={password} 
                            style={fieldStyle}
                            onChange={(e) => setPassword(e.target.value)}/>
                        <Button type="submit" variant='contained'>Submit</Button>
                        {errors.map((err) => <Alert key="id" severity='error'>{err}</Alert>)}
                    </form>
                </Paper>
            </Box>
        </Grid>
    </>
  )
}

export default LoginForm