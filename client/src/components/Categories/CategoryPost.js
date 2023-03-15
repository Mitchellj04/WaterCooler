import React from 'react'
import { Box, Button, Link, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CategoryPost = ({ post }) => {

  const navigate = useNavigate()


  return (
    <Box style={{ paddingTop: 25 }}>
      <Paper>
        <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{post.title}</Typography>
        <Typography>{post.description}</Typography>
        <Typography>Link: <Link href={post.link}>{post.link}</Link></Typography>
        <Button variant='contained' color='secondary' onClick={() => navigate(`/posts/${post.id}`)}>Comments
        </Button>
      </Paper>
    </Box>
  )
}

export default CategoryPost