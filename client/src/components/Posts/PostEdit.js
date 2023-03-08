import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatePost } from '../../Redux/posts/PostSlice'

const PostEdit = ({ post, hideEditPost, setHideEditPost }) => {
  // REDUX 
  const dispatch = useDispatch()

  // REACT STATE 
  const [postEdit, setPostEdit] = useState(post)
  const handlePostClose = () => { setHideEditPost(false) }
  const handleChange = (e) => { setPostEdit({ ...postEdit, [e.target.name]: e.target.value }) }
  

  // STYLE 
  const fieldStyle = {
    margin: '5px auto'
  }

  // PARAMS FOR EDIT 
  const newPost = {
    title: postEdit.title,
    description: postEdit.description,
    github_link: postEdit.link
  }

  // HANDLE EDIT 
  const handlePostEdit = (e) => {
    e.preventDefault()
    let id = post.id
    dispatch(updatePost({ id, newPost }))
    setHideEditPost(false)
  }

  return (
    <>
      <Dialog
        open={hideEditPost}
        keepMounted
        onClose={handlePostClose}
        maxWidth="lg">
        <DialogTitle>Edit Post</DialogTitle>
        <form onSubmit={handlePostEdit}>
          <DialogContent>
            <TextField
              fullWidth
              label="title"
              name="title"
              style={fieldStyle}
              value={postEdit.title}
              onChange={handleChange} />
            <TextField
              fullWidth
              label="description"
              name="description"
              style={fieldStyle}
              value={postEdit.description}
              onChange={handleChange} />
            <TextField
              fullWidth
              label="link"
              name="link"
              style={fieldStyle}
              value={postEdit.link}
              onChange={handleChange} />
            {/* <TextField 
            fullWidth 
            label="category"
            name="category"
            style={fieldStyle}
            value={projectEdit.title} 
            onChange={handleChange}/> */}

          </DialogContent>
          <DialogActions>
            <Button type="submit">Submit</Button>
            <Button onClick={handlePostClose}>Close</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default PostEdit