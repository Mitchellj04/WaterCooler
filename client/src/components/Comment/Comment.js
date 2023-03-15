import { Box, Button, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePostComment } from '../../Redux/posts/PostSlice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Comment = ({ comment, postUser, post }) => {

  const dispatch = useDispatch()

  const currentUser = useSelector((state) => state.user.users)

  const data = {
    id: comment.id,
    post_id: post.id
  }

  const handleDelete = () => { dispatch(deletePostComment(data)) }

  function userComment() {
    if (currentUser === null) {
      return <></>
    }
    else if (currentUser.username === comment.user.username) {
      return <> <Button onClick={handleDelete} size='small'><DeleteOutlineIcon /></Button>
      </>
    }

  }

  function filterComment() {
    if (comment.post_id === post.id) {
      return <>
        <div style={{ marginTop: 5 }}>
          {comment.user.username}:
          <div> <Typography>{comment.answer}{userComment()}</Typography></div>
        </div>
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