import { Alert, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../../Redux/users/UserSlice'

const LoginForm = () => {

    //REDUX
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.users)
    const errors = useSelector((state) => state.user.errors)
    const loggedIn = useSelector((state) => state.user.loggedIn)
    console.log(user)
    console.log(errors)
    console.log(loggedIn)

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

    const handleSubmit = () => {
       console.log(loggedIn)
    }


    const handleSubmitRedux = (e) => {
        console.log(loggedIn)
        console.log(user)
        e.preventDefault()
        dispatch(login(userData))
        if (loggedIn === true){
            navigate('/login') 

        }else{
           navigate('/login')

        }
        
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
                        <Button type="submit" variant='contained' onClick={handleSubmit}>Submit</Button>
                        {errors.map((err) => <Alert key="id" severity='error'>{err}</Alert>)}
                    </form>
                </Paper>
            </Box>
        </Grid>
    </>
  )
}

export default LoginForm