import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import PostEdit from './PostEdit';
import Comment from '../Comment/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PostList = ({post, posts, currentUser, setPosts}) => {
  const [postUser, setPostUser] = useState(post.user.username)
  const [category, setCategory] = useState(post.categories)
  const [comments, setComments] = useState(post.comments)
  const [hideEditPost, setHideEditPost] = useState(false)
  // console.log(post)

  const handlePostOpen = () => {setHideEditPost(true)}

  console.log(comments)

  const mapComments = comments.map((comment) => <Comment post={post} postUser={postUser} comment={comment} currentUser={currentUser} setComments={setComments}/>)
  const mapCategory = category.map((data) => {
    return <Button variant='outlined' key={data.id}>{data.code}</Button>
})

function emptyComment (){
  if (comments.length > 0){
    return <>
      {mapComments}
    </>
  }
  else{
    return <Alert severity='info'>Please add a comment to answer</Alert>
  }
}

const handleDeletePost = (deleted) => {
  const filterDelete = posts.filter((postItem) => {
    if (postItem.id !== deleted){
      return postItem
    }
    else {
      return null
    }
  });
  setPosts(filterDelete)
}

function handleDelete(){
fetch(`/posts/${post.id}`, {
  method: "DELETE",
  headers: {'Content-Type' : 'application/json'}
})
handleDeletePost(post.id)
}

function postEdit(){
  if(currentUser === null){
    return <>
   
    </>
  }
  else if (currentUser.username === postUser){
    return <>
     <Button startIcon={<EditIcon className='editButton' onClick={handlePostOpen}/>}></Button>
    <Button startIcon={<DeleteIcon color="secondary" className="deleteButton" onClick={handleDelete} />}></Button>
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
   </div>
    <Box>
    <Accordion className="Accordion-side" style={{ width: "100%", color: "white", backgroundColor: "#5ea4ff" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography style={{ color: "white" }}>Comments ({comments.length})</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#b4bcc5" }}>
                  {emptyComment()}
              </AccordionDetails>
            </Accordion>
    </Box>
    <div>
    {postEdit()}
    </div>
    </>
  )
}

export default PostList