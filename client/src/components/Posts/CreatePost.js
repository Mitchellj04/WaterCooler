import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const CreatePost = ({currentUser, setPosts}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [userId, setUserId] = useState('')

    const fieldStyle = {
        margin: '5px auto'
      }
      const paperStyle ={
        padding: '30px 20px',
        width: 400, 
        margin: '100px auto'
    }

    const handlePostSubmit = (e) => {
        e.preventDefault()
        const newPost = {
            title,
            description, 
            link, 
            user_id: currentUser.id,
            user: currentUser

        }
        fetch('/posts', {
            method: "POST",
            headers: {"Content-Type":"Application/json"},
            body: JSON.stringify(newPost)
        })
        .then((resp) => console.log(resp))
        .then((post) => console.log(post))
    }
    
  return (
    <>
    <Grid item xs={12}>
        <Box>
            <Paper style={paperStyle}>
            <Typography variant='h4'>Create Post</Typography>
            <form onSubmit={handlePostSubmit}>
                <TextField 
                 fullWidth 
                 label="title"
                 value={title} 
                 style={fieldStyle}
                 onChange={(e) => setTitle(e.target.value)}
                 />
                <TextField 
                 fullWidth 
                 label="problem"
                 value={description} 
                 style={fieldStyle}
                 onChange={(e) => setDescription(e.target.value)}
                 />
                <TextField 
                 fullWidth 
                 label="link"
                 value={link} 
                 style={fieldStyle}
                 onChange={(e) => setLink(e.target.value)}
                 />
                <Button type="submit">Submit</Button>
                </form>
            </Paper>
        </Box>
    </Grid>
    
    </>
  )
}

export default CreatePost