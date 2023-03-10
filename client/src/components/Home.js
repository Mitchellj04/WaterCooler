import { Grid, Typography } from '@mui/material'
import React from 'react'
import CategoryMain from './Categories/CategoryMain';
import PostMain from './Posts/PostMain';
import ProjectMain from './Projects/ProjectMain';


const Home = ({ currentUser, setErrorMain, categories }) => {

  return (
    <Grid container style={{ paddingTop: 100 }}>
      <Grid item xs={2}>
        <Typography variant="h4">Categories</Typography>
        <CategoryMain setErrorMain={setErrorMain} />
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h4" style={{ paddingBottom: 25 }}>Projects</Typography>
        <ProjectMain currentUser={currentUser} setErrorMain={setErrorMain} />
      </Grid>

      <Grid item xs={5}>
        <Typography variant="h4">Posts</Typography>
        <PostMain currentUser={currentUser} />
      </Grid>

    </Grid>
  )
}

export default Home