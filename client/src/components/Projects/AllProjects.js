import { Box, Button, Grid, Link, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProjects } from '../../Redux/projects/ProjectSlice';
import { fetchCategory } from '../../Redux/category/CategorySlice';

const AllProjects = () => {

  const projects = useSelector((state) => state.project.projects)
  const currentUser = useSelector((state) => state.user.users)
  const categories = useSelector((state) => state.category.categories)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProjects())
    dispatch(fetchCategory())
  })

  const handleClick = (e) => {
    e.preventDefault()
    navigate(`/categories/${e.target.value}`)
  }

  const handleCategory = (e) => {
    e.preventDefault()
    navigate(`/categories/${e.target.value}`)
  }


  function projectEdit(user) {
    if (currentUser.username === user) {
      return <>
        <Button startIcon={<EditIcon className='editButton' />}></Button>
        <Button startIcon={<DeleteIcon color="secondary" className="deleteButton" />}></Button></>
    }
  }

  const categoryButton = categories.map((category) => {
    return <Grid item xs={2}><Box style={{ paddingTop: 20 }} key={category.id}>
      <Button id={category.id} value={category.code} variant="contained" onClick={handleClick}>{category.code}</Button>
    </Box></Grid>
  })

  function creator(projectUser) {
    if (currentUser === null) { return <>{projectUser}</> }
    else if (currentUser.username === projectUser) { return <>{projectUser}</> }
    else { return <Link href={`/userprofile/${projectUser}`}>{projectUser}</Link> }
  }


    // PROJECT COLLAB NAVIGATE 
    const hanldeProject = (project) => {
     navigate(`/projects/${project}`)
    }
  
    // HANDLE PROJECT COLLAB BUTTON
    const collabs = (projectUser, id) => {
      if (currentUser === null) {
        return <Button
          variant='contained'
          color="secondary"
          onClick={() => hanldeProject(id)}
          sx={{ backgroundColor: 'secondary.light' }}
          style={{ marginTop: 15 }}>Collaborate</Button>
      }
      else if (currentUser.username === projectUser.username) {
        return <Button
          variant='contained'
          onClick={() => hanldeProject(id)}
          sx={{ backgroundColor: 'secondary.light' }}
          style={{ marginTop: 15 }}>Collaborations</Button>
      }
      else {
        return <Button
          variant='contained'
          color="secondary"
          sx={{ backgroundColor: 'secondary.light' }}
          onClick={() => hanldeProject(id)}
          style={{ marginTop: 15 }}>Collaborate</Button>
      }
    }
  

  const displayAll = projects.map((data) => {
    return <><Grid item xs={4} >
      <Box style={{ marginTop: 20 }} key={data.id}>
        <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{data.title}</Typography>
        <Typography style={{ padding: 5 }}>{data.description}</Typography>
        <Typography style={{ padding: 5 }}>Link: <Link href={data.github_link} target="_blank" rel='noopener noreferrer'>{data.github_link}</Link></Typography>
        <Typography style={{ padding: 5 }}>User: {creator(data.user.username)}</Typography>
      </Box>
      {data.categories.map((category) => { return <Button variant='outlined' value={category.code} style={{ margin: 5 }} key={category.id} onClick={handleCategory}>{category.code}</Button> })}
      <div>{collabs(data.user, data.id)}</div>
    </Grid>
    </>
  })


  return (
    <>
      {/* <Grid item xs={3} style={{}} > </Grid> */}
      <Grid container style={{ paddingTop: 100 }}>
        <Grid item xs={12}> <Typography variant="h4">Categories</Typography> </Grid>
        {categoryButton}
        <Grid item xs={12} style={{ paddingTop: 25 }}> <Typography variant="h4">Projects</Typography> </Grid>
        {displayAll}
      </Grid>
    </>
  )
}

export default AllProjects