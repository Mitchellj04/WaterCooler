import React, {useState} from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'

const CreateComment = ({hideCommentPost, setHideCommentPost, post, currentUser, setComments}) => {

  const [answer, setAnswer] = useState('')
  const handleCommentClose = () => {setHideCommentPost(false)}
  // const handleChange = (e) => {setCommentCreate({...commentCreate, [e.target.name]: e.target.value})}


  const handleCommentCreate = (e) => {
    e.preventDefault()
    const comment = {
      post_id: post.id,
      user_id: currentUser.id,
      answer

    }
    // fetch('/comments', {
    //   method: "POST",
    //   headers: {"Content-Type": "Application/json"},
    //   body: JSON.stringify(comment)
    // })
    // .then((resp) => resp.json())
    // .then((comment) => setComments((prevState) => [...prevState, comment]))
    // setHideCommentPost(false)
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
           onChange={(e) => setAnswer(e.target.value)}/>
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