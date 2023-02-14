import { Grid, Typography } from '@mui/material'

import React from 'react'
import CategoryMain from './Categories/CategoryMain';
import PostMain from './Posts/PostMain';
import ProjectMain from './ProjectMain';
import Sidenav from './Sidenav';

const Home = ({projects, currentUser, setErrorMain, posts, setProjects}) => {

  // console.log(currentUser)
  return (
    <Grid container style={{paddingTop: 100}}> 
        <Grid item xs={2}>
            <Typography variant="h4">Categories</Typography>
            <CategoryMain />
        </Grid>
                <Grid item xs={5}>
                    <Typography variant="h4" style={{paddingBottom:25}}>Projects</Typography>
                    <ProjectMain projects={projects} setProjects={setProjects} currentUser={currentUser} setErrorMain={setErrorMain} />
                </Grid>

                <Grid item xs={5}>
                    <Typography variant="h4">Posts</Typography>
                    <PostMain posts={posts} currentUser={currentUser}/>
                </Grid>

    </Grid>
  )
}

export default Home