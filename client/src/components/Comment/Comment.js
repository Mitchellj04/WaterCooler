import { Box, Button, Paper, Typography } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply';
import React, {useState} from 'react'
import CreateComment from './CreateComment';

const Comment = ({comment, postUser, post, currentUser, setComments}) => {

  const [hideCommentPost, setHideCommentPost] = useState(false)

  const handleCommentOpen = () => {setHideCommentPost(true)
  console.log(post.id)}

  function userComment (){
    if(postUser === comment.user.username){
      return <Button>Edit</Button>
    }
    else{
      return <></>
    }
  }

  function createComment(){
    if(currentUser === null){
      return <></>
    }
    else{
      return <>
      <Button onClick={handleCommentOpen} startIcon={<ReplyIcon />} style={{position: "left"}}></Button>
      <CreateComment setHideCommentPost={setHideCommentPost} hideCommentPost={hideCommentPost} post={post} currentUser={currentUser} setComments={setComments}/>
      </>
    }
  }

  return (
    <>
    <Box>
      <Paper>
       {comment.user.username}: <Typography>{comment.answer}</Typography>
       {userComment()}
      </Paper>
      {createComment()}
    </Box>
    </>
  )
}

export default Comment