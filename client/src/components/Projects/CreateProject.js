import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createProjects } from '../../features/projects/ProjectSlice';
 

const CreateProject = () => { 
  
  // STYLE
  const fieldStyle = {
    margin: '5px auto'
  }
  const paperStyle ={
    padding: '30px 20px',
    width: 400, 
    margin: '100px auto'
}

  // STATE
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [categories, setCategories] = useState('')
  const navigate = useNavigate()

  // REDUX
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user.users)
  const category = useSelector((state) => state.category.categories)

  console.log(category)
 
const handleCategoryChange = (e) => {
  // setCategory((prevState) => [...prevState, parseInt(e.target.id)])
  setCategories(parseInt(e.target.id))
  console.log(parseInt(e.target.id))
}

const mapCheckCategories = category.map((category) => {
  return <FormControlLabel  control={<Checkbox value={category.code} id={category.id} onChange={handleCategoryChange}/>} label={category.code}/>
})    

const newProject = {
        title,
        description,
        github_link: link,
        user_id: currentUser.id
    }

  const handleProjectSubmit = (e) => {
      console.log(newProject, categories)
      e.preventDefault()
      dispatch(createProjects(newProject))
  }

  return (
    <>
      <Grid item xs={12}>
        <Box>
            <Paper elevation={20} style={paperStyle}>
              <Typography variant='h4'>Create Project</Typography>
              <form onSubmit={handleProjectSubmit}>
                <TextField 
                fullWidth 
                label="title"
                value={title} 
                style={fieldStyle}
                onChange={(e) => setTitle(e.target.value)}
                />
                <TextField 
                 fullWidth 
                 label="descrption"
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
                  {/* <FormControlLabel  control={<Checkbox value={'React'}  onChange={handleCategoryChange}/>} label="React"/>
                  <FormControlLabel  control={<Checkbox value={"JavaScript"}  onChange={handleCategoryChange}/>} label="javaScript"/>
                  <FormControlLabel  control={<Checkbox value={"Ruby"} onChange={handleCategoryChange}/>} label="Ruby"/> */}
                  </FormGroup>         
                </FormControl>
              <Button type="submit" variant='contained'>Submit</Button>
              </form>
            </Paper>
            
        </Box>
      </Grid> 
    </>
  )
}

export default CreateProject