import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import PostEdit from './PostEdit';

const PostList = ({post, currentUser}) => {
  const [postUser, setPostUser] = useState(post.user.username)
  const [category, setCategory] = useState(post.categories)
  const [hideEditPost, setHideEditPost] = useState(false)
  // console.log(post)

  const handlePostOpen = () => {setHideEditPost(true)}


  const mapCategory = category.map((data) => {
    return <Button variant='outlined' key={data.id}>{data.code}</Button>
})

function postEdit(){
  if(currentUser.username === postUser){
    return <>
    <Button startIcon={<EditIcon className='editButton' onClick={handlePostOpen}/>}></Button>
    <Button startIcon={<DeleteIcon color="secondary" className="deleteButton"/>}></Button>
    <PostEdit post={post} hideEditPost={hideEditPost} setHideEditPost={setHideEditPost}/>
    </>
  }
}
  
  return (
    <>
    <div>        
      <Box style={{paddingTop: 25}}>
    <Typography>{post.title}</Typography>
    <Typography>{post.description}</Typography>
    <Typography>Link: {post.link}</Typography>
    <Typography>Creator: {postUser}</Typography>
    {mapCategory}
    </Box>
    <Button variant='contained' color="secondary" style={{marginTop: 15}}>Comments</Button></div>
    <div>
    {postEdit()}
    </div>
    </>
  )
}

export default PostList