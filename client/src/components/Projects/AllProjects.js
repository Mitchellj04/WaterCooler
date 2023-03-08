import { Box, Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import { useSelector } from 'react-redux';
import CategoryMain from '../Categories/CategoryMain';
import { useNavigate } from 'react-router-dom';

const AllProjects = () => {

  const projects = useSelector((state) => state.project.projects)
  const currentUser = useSelector((state) => state.user.users)
  const categories = useSelector((state) => state.category.categories)

  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    // setSelected(e.target.value)
    navigate(`/categories/${e.target.value}`)
  }

  const handleCategory = (e) => {
    e.preventDefault()
    // setSelected(e.target.value)
    navigate(`/categories/${e.target.value}`)
  }

  console.log(projects)
  console.log(categories)


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


  const displayAll = projects.map((data) => {
    console.log(data)
    return <><Grid item xs={4} >
      <Box style={{ marginTop: 20 }} key={data.id}>
        <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{data.title}</Typography>
        <Typography style={{ padding: 5 }}>{data.description}</Typography>
        <Typography style={{ padding: 5 }}>Link: <Link href={data.github_link}>{data.github_link}</Link></Typography>
        <Typography style={{ padding: 5 }}>User: {data.user.username}</Typography>
      </Box>
      {data.categories.map((category) => { return <Button variant='outlined' value={category.code} style={{margin: 5}} key={category.id} onClick={handleCategory}>{category.code}</Button>})}
      <div><Button variant='contained' color="secondary" sx={{ backgroundColor: 'secondary.light' }} style={{ marginTop: 10, }}>Collaborate</Button></div>
      <div>{projectEdit(data.user.username)}</div>
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