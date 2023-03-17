import { Box, Button, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryProject = ({ projects }) => {

  const navigate = useNavigate()
  const emptyProject = () => {
    
  }

  return (
    <Box style={{ padding: 25 }}>
      <Paper>
        <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{projects.title}</Typography>
        <Typography>{projects.description}</Typography>
        <Typography>Link: <Link href={projects.github_link}>{projects.github_link}</Link></Typography>
        <Button variant='contained' color='secondary' onClick={() => navigate(`/projects/${projects.id}`)}>Collaborate</Button>
      </Paper>
    </Box>
  )
}

export default CategoryProject