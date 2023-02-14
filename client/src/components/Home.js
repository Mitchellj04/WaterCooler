import { Grid, Typography } from '@mui/material'

import React from 'react'
import CategoryMain from './Categories/CategoryMain';
import PostMain from './Posts/PostMain';
import Project from './ProjectMain';
import Sidenav from './Sidenav';

const Home = ({projects, currentUser, setErrorMain, posts}) => {

  // console.log(currentUser)
  return (
    <Grid container style={{paddingTop: 100}}> 
        <Grid item xs={2}>
            <Typography variant="h4">Categories</Typography>
            <CategoryMain />
        </Grid>
                <Grid item xs={5}>
                    <Typography variant="h4" style={{paddingBottom:25}}>Projects</Typography>
                    <Project projects={projects} currentUser={currentUser} setErrorMain={setErrorMain} />
                </Grid>

                <Grid item xs={5}>
                    <Typography variant="h4">Posts</Typography>
                    <PostMain posts={posts}/>
                </Grid>

    </Grid>
  )
}

export default Home