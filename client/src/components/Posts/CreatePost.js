import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPosts } from '../../features/posts/PostSlice'

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')

    // REDUX
    const currentUser = useSelector((state) => state.user.users)
    const dispatch = useDispatch()


    const fieldStyle = {
        margin: '5px auto'
      }
      const paperStyle ={
        padding: '30px 20px',
        width: 400, 
        margin: '100px auto'
    }

    const data = {
        post:{            
            title,
            description, 
            link, 
            user_id: currentUser.id,
            },
            tag: [154]
        }
     
    const newPost = {
            title,
            description, 
            link, 
            user_id: currentUser.id,
            user: currentUser

        }

    const handlePostSubmit = (e) => {
        e.preventDefault()
        dispatch(createPosts(data))
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