import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const PostList = ({post}) => {
  const [postUser, setPostUser] = useState(post.user.username)
  const [category, setCategory] = useState(post.categories)

  // console.log(post)

  const mapCategory = category.map((data) => {
    return <Button variant='outlined' key={data.id}>{data.code}</Button>
})

  
  return (
    <div>        
      <Box style={{paddingTop: 25}}>
    <Typography>{post.title}</Typography>
    <Typography>{post.description}</Typography>
    <Typography>Link: {post.link}</Typography>
    <Typography>Creator: {postUser}</Typography>
    {mapCategory}
    </Box>
    <Button variant='contained' color="secondary" style={{marginTop: 15}}>Comments</Button></div>
  )
}

export default PostList