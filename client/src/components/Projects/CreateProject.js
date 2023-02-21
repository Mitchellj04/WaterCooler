import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";
 

const CreateProject = ({setProjects, currentUser, categories, projects}) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [projectId, setProjectId] = useState(projects.slice(-1)[0].id+1)
  const [category, setCategory] = useState('');
  const navigate = useNavigate()

  const fieldStyle = {
    margin: '5px auto'
  }
  const paperStyle ={
    padding: '30px 20px',
    width: 400, 
    margin: '100px auto'
}

const handleCategoryChange = (e) => {
  // setCategory((prevState) => [...prevState, parseInt(e.target.id)])
  setCategory(parseInt(e.target.id))
  console.log(e.target.id)
}

const mapCheckCategories = categories.map((category) => {
  return <FormControlLabel  control={<Checkbox value={category.code} id={category.id} onChange={handleCategoryChange}/>} label={category.code}/>
})

console.log(category)

  const handleProjectSubmit = (e) => {
    e.preventDefault()
    const newProject = {
        title,
        description,
        github_link: link,
        user_id: currentUser.id
    }
    // const join = {
    //   project_id: project,
    //   category_id: category
    // }
    fetch('/projects', {
      method: "POST",
      headers: {"Content-Type":"Application/json"},
      body: JSON.stringify(newProject)
    })
    .then((resp) => resp.json())
    .then((project) => {setProjects((prevState) => [...prevState, project])
     setProjectId(project.id)})
    // navigate('/');
   console.log(projectId)

   async function fetchJoin( ){
    const resp = await fetch('/join', {
      method: "POST", 
      headers: {"Content-Type": "Application/json"},
      body:JSON.stringify({
        project_id: projectId,
        category_id: category
      })
    })
    console.log(resp)
   }
   fetchJoin()
  }

  // const handleJoin = (e) => {
  //   e.preventDefault()
  //   {handleProjectSubmit(e)}
  //   fetch('/join', {
  //     method: "POST", 
  //     headers: {"Content-Type": "Application/json"},
  //     body:JSON.stringify({
  //       project_id: projectId,
  //       category_id: category
  //     })
  //   })
  //   .then((resp) => resp.json())
  //   .then((join) => console.log(join))
  // }
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