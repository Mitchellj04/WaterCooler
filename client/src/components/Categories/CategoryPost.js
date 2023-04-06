import React from 'react'
import { Box, Button, Link, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CategoryPost = ({ post }) => {

  const navigate = useNavigate()


  return (
    <Box style={{ marginBottom: 5, paddingTop: 25, paddingBottom: 5, border: '2px solid #6fa2e4', color: 'black', borderRadius: 8}}>
      <Paper>
        <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{post.title}</Typography>
        <Typography>{post.description}</Typography>
        <Typography>Link: <Link href={post.link} target="_blank" rel='noopener noreferrer'>{post.link}</Link></Typography>
        <Button variant='contained' color='secondary' onClick={() => navigate(`/posts/${post.id}`)}>Comments
        </Button>
      </Paper>
    </Box>
  )
}

export default CategoryPost