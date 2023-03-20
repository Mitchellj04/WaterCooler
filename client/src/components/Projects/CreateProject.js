import React, { useEffect, useState } from 'react'
import { Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createProjects } from '../../Redux/projects/ProjectSlice';
import { fetchCategory } from '../../Redux/category/CategorySlice';


const CreateProject = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategory())
  }, {})


  // STYLE
  const fieldStyle = {
    margin: '5px auto'
  }
  const paperStyle = {
    padding: '30px 20px',
    width: 400,
    margin: '100px auto'
  }

  // STATE
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [categories, setCategories] = useState([])
  const [categoryInfo, setCategoryInfo] = useState([])
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const navigate = useNavigate()

  // REDUX
  const project = useSelector((state) => state.project.projects)
  const currentUser = useSelector((state) => state.user.users)
  const errors = useSelector((state) => state.project.errors)
  const category = useSelector((state) => state.category.categories)

  console.log(errors)
  console.log(project)

  // HANLDE CHECK BOX 
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`)
    if (checked) {
      setCategoryInfo([...categoryInfo, parseInt(value)])
    }
    else {
      setCategoryInfo(categoryInfo.filter((e) => e !== parseInt(value)))
    }
  }


  // DISPLAY CATEGORIES 
  const mapCheckCategories = category.map((category) => {
    return <FormControlLabel control={<Checkbox value={category.id} id={category.id} onChange={handleCategoryChange} />} label={category.code} />
  })

  // DATA FOR FETCH SUBMIT 
  const data = {
    project: {
      title,
      description,
      github_link: link,
      user_id: currentUser.id
    },
    tag: categoryInfo
  }

  // HANDLE ERROR FOR SUBMIT
  const errorHandle = () => {
    setFailure(true)
  }

  const handleErrorClose = () => {
    if (errors[0] === "Successful") {
      console.log(true)
      setFailure(false)
      navigate(`/projects/${project[project.length - 1].id}`)
    }
    else {
      console.log(false)
      setFailure(false)
    }

  }

  // SUBMIT NEW PROJECT 
  const handleProjectSubmit = (e) => {
    e.preventDefault()
    dispatch(createProjects(data))
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
                </FormGroup>
              </FormControl>
              <Button type="submit" variant='contained' onClick={errorHandle}>Submit</Button>
              <Dialog
                open={failure}
                keepMounted
                onClose={handleErrorClose}
                maxWidth="lg">
                <DialogContent>{errors.map((err) => { if (err === "Successful") { return <Alert key='id' severity='success'>{err}</Alert> } else { return <Alert key={err} severity='error'>{err}</Alert> } })}</DialogContent>
                <DialogActions>
                  <Button onClick={handleErrorClose}>Close</Button>
                </DialogActions>
              </Dialog>
            </form>

          </Paper>

        </Box>
      </Grid>
    </>
  )
}

export default CreateProject