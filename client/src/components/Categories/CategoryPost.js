import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'

const CategoryPost = ({post}) => {
  return (
    <Box>
        <Paper>
        <Typography>{post.title}</Typography>
          <Typography>{post.description}</Typography>
          <Typography>{post.github_link}</Typography>
          {/* <Typography>Creator: {projectUser}</Typography> */}
          {/* {mapCategory} */}
          <Button variant='contained' color='secondary'>Comments
          </Button>
        </Paper>
    </Box>
  )
}

export default CategoryPost