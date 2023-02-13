import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const AllProjects = ({projects}) => {

    console.log(projects)

    const displayAll = projects.map((data) => {
        return <Grid item xs={4} style={{marginTop: 20}}>
            <Box>
            <Typography variant='h6'>{data.title}</Typography>
            <Typography>{data.description}</Typography>
            <Typography>Link: {data.github_link}</Typography>
            <Typography>User: {data.user.username}</Typography>
            </Box>
            <Button variant='contained' color="secondary" style={{marginTop: 10}}>Collaborate</Button>
        </Grid>
    })
  return (
    <>
    <Typography variant="h4" style={{paddingTop: 100}}>Projects</Typography>
    <Grid container style={{paddingTop: 50}}>
        
        <Grid item xs={3} >
            <Typography variant='h4'>
                Categories
            </Typography>
        </Grid>
        {displayAll}
    </Grid>
    
    </>
  )
}

export default AllProjects