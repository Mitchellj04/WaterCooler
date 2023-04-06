import { Box, Button, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryProject = ({ projects }) => {

  const navigate = useNavigate()
  const emptyProject = () => {
    
  }

  return (
    <Box style={{ marginBottom: 5, paddingTop: 25, paddingBottom: 5, border: '2px solid #6fa2e4', color: 'black', borderRadius: 8}}>
      <Paper>
        <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{projects.title}</Typography>
        <Typography>{projects.description}</Typography>
        <Typography>Link: <Link href={projects.github_link} target="_blank" rel='noopener noreferrer'>{projects.github_link}</Link></Typography>
        <Button variant='contained' color='secondary' onClick={() => navigate(`/projects/${projects.id}`)}>Collaborate</Button>
      </Paper>
    </Box>
  )
}

export default CategoryProject