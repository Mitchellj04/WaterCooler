import { Box, Button, Paper, Typography } from '@mui/material'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';

const Comment = ({comment, postUser, post}) => {


  function userComment (){
    if(postUser === comment.user.username){
      return <><Button>Edit</Button>
        <Button>Delete</Button>
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