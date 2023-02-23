import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import PostEdit from './PostEdit';
import Comment from '../Comment/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../features/posts/PostSlice';

const PostList = ({post}) => {
  const [postUser, setPostUser] = useState(post.user.username)
  const [category, setCategory] = useState(post.categories)
  const [comments, setComments] = useState(post.comments)
  const [hideEditPost, setHideEditPost] = useState(false)
  const dispatch = useDispatch()

  const currentUser = useSelector((state) => state.user.users)
  
  // REDUX 
  const posts = useSelector((state) => state.post.posts)
  // REDUX
  // REPLACE SETPOSTS 
  // FIX HANDLE DELETE POST 


  const handlePostOpen = () => {setHideEditPost(true)}

  

  const mapComments = comments.map((comment) => <Comment key={comment.id} post={post} postUser={postUser} comment={comment} currentUser={currentUser} setComments={setComments}/>)
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

// const handleDeletePost = (deleted) => {
//   const filterDelete = posts.filter((postItem) => {
//     if (postItem.id !== deleted){
//       return postItem
//     }
//     else {
//       return null
//     }
//   });
//   // setPosts(filterDelete)
// }

function handleDelete(){
  console.log(post.id)
  dispatch(deletePost(post.id))
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