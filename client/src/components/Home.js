import { Grid } from '@mui/material'

import React from 'react'
import PostMain from './Posts/PostMain';
import Project from './ProjectMain';
import Sidenav from './Sidenav';

const Home = ({projects}) => {
  return (
    <Grid container style={{padding: 100}}> 
        <Grid item xs={2}>
            Sidebar
        </Grid>
                <Grid item xs={5}>
                    <Project projects={projects}/>
                </Grid>

                <Grid item xs={5}>
                    <PostMain />
                </Grid>

    </Grid>
  )
}

export default Home