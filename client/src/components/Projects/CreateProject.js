import React, { useState } from 'react'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";
 

const CreateProject = ({setProjects, currentUser}) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const navigate = useNavigate()

  const fieldStyle = {
    margin: '5px auto'
  }
  const paperStyle ={
    padding: '30px 20px',
    width: 400, 
    margin: '100px auto'
}

  const handleProjectSubmit = (e) => {
    e.preventDefault()
    const newProject = {
        title,
        description,
        github_link: link,
        user_id: currentUser.id
    }
    fetch('/projects', {
      method: "POST",
      headers: {"Content-Type":"Application/json"},
      body: JSON.stringify(newProject)
    })
    .then((resp) => resp.json())
    .then((project) => console.log(project))
  }
// setProjects((prevState) => [...prevState, project])
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
              <Button type="submit" variant='contained'>Submit</Button>
              </form>
            </Paper>
            
        </Box>
      </Grid> 
    </>
  )
}

export default CreateProject