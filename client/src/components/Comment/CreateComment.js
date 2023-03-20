import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { createPostComment } from '../../Redux/posts/PostSlice'


const CreateComment = ({ hideCommentPost, setHideCommentPost, post }) => {


  const [answer, setAnswer] = useState('')
  const handleCommentClose = () => { setHideCommentPost(false) }

  // REDUX
  const currentUser = useSelector((state) => state.user.users)
  const dispatch = useDispatch()

  // FETCH PARAMS
  const data = {
    id: post.id,
    comment: {
      post_id: post.id,
      user_id: currentUser.id,
      answer
    }
  }

  // CREATE NEW COMMENT 
  const handleCommentCreate = (e) => {
    e.preventDefault()
    console.log(data)
    dispatch(createPostComment(data))
    setHideCommentPost(false)
    setAnswer('')
  }

  return (
    <>
      <Dialog
        open={hideCommentPost}
        keepMounted
        onClose={handleCommentClose}
        maxWidth="lg">
        <DialogTitle>Comment</DialogTitle>
        <form onSubmit={handleCommentCreate}>
          <DialogContent>
            <TextField
              fullWidth
              label="comment"
              name="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Submit</Button>
            <Button onClick={handleCommentClose}>Close</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default CreateComment