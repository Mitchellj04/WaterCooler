import { Box, Button, Grid, Paper, TextField, Typography, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Alert, } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPosts } from '../../Redux/posts/PostSlice'

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState([])
    const [link, setLink] = useState('')

    // REDUX
    const currentUser = useSelector((state) => state.user.users)
    const category = useSelector((state) => state.category.categories)
    const errors = useSelector((state) => state.post.errors)
    const dispatch = useDispatch()

 

    // STYLE
    const fieldStyle = {
        margin: '5px auto'
      }
      const paperStyle ={
        padding: '30px 20px',
        width: 400, 
        margin: '100px auto'
    }

    // FETCH PARAMS 
    const data = {
        post:{            
            title,
            description, 
            link, 
            user_id: currentUser.id,
            },
            tag: [154]
        }
     
    // const newPost = {
    //         title,
    //         description, 
    //         link, 
    //         user_id: currentUser.id,
    //         user: currentUser

    //     }

        let number = []
 
        const handleCategoryChange = (e) => {
          // setCategory((prevState) => [...prevState, parseInt(e.target.id)])
          number.push(parseInt(e.target.id))
          setCategories()
          console.log(number)
        }

    const mapCheckCategories = category.map((category) => {
        return <FormControlLabel  control={<Checkbox value={category.code} id={category.id} onChange={handleCategoryChange}/>} label={category.code}/>
        })   

    const handlePostSubmit = (e) => {
        e.preventDefault()
        dispatch(createPosts(data))
    }

    console.log(errors)

    function errorHandler(){
        if(errors.length > 0 ){ 
            console.log(errors)
            return <>{errors.map((err) => <Alert key="id" severity='error'>{err}</Alert>)}</>}
        else{
            return <></>
        }
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
                <FormControl
                fullWidth>
                  <FormLabel>Categories</FormLabel>
                  <FormGroup>
                    {mapCheckCategories}
                  </FormGroup>         
                </FormControl>
                <Button type="submit">Submit</Button>
                {errorHandler()}
                </form>
            </Paper>
        </Box>
    </Grid>
    
    </>
  )
}

export default CreatePost