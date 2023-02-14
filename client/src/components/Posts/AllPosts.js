import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const AllPosts = ({posts}) => {

    console.log(posts)

    const displayAll = posts.map((data) => {
        return <Grid item xs={4} style={{marginTop: 20}} key={data.id}>
            <Box>
            <Typography variant='h6'>{data.title}</Typography>
            <Typography>{data.description}</Typography>
            <Typography>Link: {data.link}</Typography>
            <Typography>User: {data.user.username}</Typography>
            </Box>
            <Button variant='contained' color="secondary" style={{marginTop: 10}}>Comment</Button>
        </Grid>
    })
  return (
    <>
    <Typography variant="h4" style={{paddingTop: 100}}>Posts</Typography>
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

export default AllPosts