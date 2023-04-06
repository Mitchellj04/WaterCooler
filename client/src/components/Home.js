import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CategoryMain from './Categories/CategoryMain';
import PostMain from './Posts/PostMain';
import ProjectMain from './Projects/ProjectMain';


const Home = ({ currentUser, setErrorMain, categories }) => {

  return (
    <Grid container style={{ paddingTop: 100  }}>
      <Grid item xs={2} >
        <Box style={{ borderRadius: 8, color: 'black'}}>
        <Typography variant="h3">Categories</Typography>
        <CategoryMain setErrorMain={setErrorMain} />
        </Box>
      </Grid>
      <Grid item xs={5} style={{alignItems: 'center'}}>
        <Box style={{ width: '95%', marginLeft: 10, borderRadius: 8, color: 'black'}}>
        <Typography variant="h3">Projects</Typography>
        <ProjectMain currentUser={currentUser} setErrorMain={setErrorMain} />
        </Box>
      </Grid>

      <Grid item xs={5}>
        <Box style={{ width: '95%', marginRight: 10, borderRadius: 8, color: 'black'}}>
        <Typography variant="h3">Posts</Typography>
        <PostMain currentUser={currentUser} setErrorMain={setErrorMain} />
        </Box>
      </Grid>

    </Grid>
  )
}

export default Home