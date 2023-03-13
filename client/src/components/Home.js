import { Grid, Typography } from '@mui/material'
import React from 'react'
import CategoryMain from './Categories/CategoryMain';
import PostMain from './Posts/PostMain';
import ProjectMain from './Projects/ProjectMain';


const Home = ({ currentUser, setErrorMain, categories }) => {

  return (
    <>
    <Grid container style={{ paddingTop: 100 }}>
      <Grid item xs={12}>
        <Typography variant="h4">Categories</Typography>
      </Grid>
      <CategoryMain setErrorMain={setErrorMain} />
      <Grid item xs={12}>
        <Typography variant="h4" style={{ paddingBottom: 25, paddingTop: 25 }}>Projects</Typography>
      </Grid>
      <ProjectMain currentUser={currentUser} setErrorMain={setErrorMain} />
      <Grid item xs={12}>
      <Typography variant="h4" style={{ paddingBottom: 25, paddingTop: 25 }}>Posts</Typography>  
      </Grid>
      <PostMain currentUser={currentUser} />
    </Grid>
    </>
  )
}

export default Home