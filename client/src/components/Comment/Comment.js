import { Box, Button, Paper, Typography } from '@mui/material'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../features/comment/CommentSlice';

const Comment = ({comment, postUser, post}) => {

  const dispatch = useDispatch()

  const handleDelete = () => { dispatch(deleteComment(comment.id))}

  function userComment (){
    if(postUser === comment.user.username){
      return <><Button>Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </>
    }
    else{
      return <></>
    }
  }


  function filterComment(){
    if(comment.post_id === post.id){
      return<>
      {comment.user.username}: <Typography>{comment.answer}</Typography>
      {userComment()}
      </>
    }
  }

  return (
    <>
    <Box>
      <Paper>
       {filterComment()}
      </Paper>
    </Box>
    </>
  )
}

export default Comment