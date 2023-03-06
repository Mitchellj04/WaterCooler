import React from 'react'
import { Box, Button, Link, Paper, Typography } from '@mui/material'

const CategoryPost = ({post}) => {
  return (
    <Box>
        <Paper>
        <Typography>{post.title}</Typography>
          <Typography>{post.description}</Typography>
          <Typography>Link: <Link>{post.link}</Link></Typography>
          {/* <Typography>Creator: {projectUser}</Typography> */}
          {/* {mapCategory} */}
          <Button variant='contained' color='secondary'>Comments
          </Button>
        </Paper>
    </Box>
  )
}

export default CategoryPost