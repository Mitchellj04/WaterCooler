import { Box, Button, Link, Paper, Typography } from '@mui/material'
import React from 'react'

const CategoryProject = ({projects}) => {

    console.log(projects)
    // const mapCategory = category.map((data) => {
    //     return <Button>{data.code}</Button>
    // })
  return (
    <Box>
        <Paper>
        <Typography>{projects.title}</Typography>
          <Typography>{projects.description}</Typography>
          <Typography>Link: <Link>{projects.github_link}</Link></Typography>
          {/* <Typography>Creator: {projectUser}</Typography> */}
          {/* {mapCategory} */}
          <Button variant='contained' color='secondary'>Collaborate</Button>
        </Paper>
    </Box>
  )
}

export default CategoryProject