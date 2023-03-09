import React from 'react'
import { Box, Button, Link, Paper, Typography } from '@mui/material'

const CategoryPost = ({post}) => {
  return (
    <Box style={{paddingTop: 25}}>
        <Paper>
        <Typography variant='h6' style={{padding: 5, fontWeight: 'Bold'}}>{post.title}</Typography>
          <Typography>{post.description}</Typography>
          <Typography>Link: <Link href={post.link}>{post.link}</Link></Typography>
          {/* <Typography>Creator: {projectUser}</Typography> */}
          {/* {mapCategory} */}
          <Button variant='contained' color='secondary'>Comments
          </Button>
        </Paper>
    </Box>
  )
}

export default CategoryPost