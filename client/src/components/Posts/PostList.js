import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import CreateComment from '../Comment/CreateComment'
import EditIcon from '@mui/icons-material/Edit'
import PostEdit from './PostEdit';
import Comment from '../Comment/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../features/posts/PostSlice';
import { fetchComment } from '../../features/comment/CommentSlice';



const PostList = ({ post }) => {

  const dispatch = useDispatch()
  const [postUser, setPostUser] = useState(post.user.username)
  const [category, setCategory] = useState(post.categories)
  const [comments, setComments] = useState(post.comments)

  // HANDLE OPEN EDIT MENU 
  const [hideEditPost, setHideEditPost] = useState(false)
  const handlePostOpen = () => { setHideEditPost(true) }
  const [hideCommentPost, setHideCommentPost] = useState(false)
  const handleCommentOpen = () => { setHideCommentPost(true) }


  // FETCH ALL COMMENTS
  useEffect(() => {
    dispatch(fetchComment())
  }, [])

  // REDUX 
  const posts = useSelector((state) => state.post.posts)
  const currentUser = useSelector((state) => state.user.users)
  const comment = useSelector((state) => state.comment.comments)


  // MAP COMMENTS TO POST
  const mapComments = comment.map((comment) => <Comment key={comment.id} post={post} postUser={postUser} comment={comment} currentUser={currentUser} setComments={setComments} />)
  // MAP CATEGORY TO POST
  const mapCategory = category.map((data) => { return <Button variant='outlined' key={data.id}>{data.code}</Button> })

  // HANDLE EMPTY COMMENT ALERT
  function emptyComment() {
    if (comments.length > 0) {
      return <>
        {mapComments}
      </>
    }
    else {
      return <Alert severity='info'>Please add a comment to answer</Alert>
    }
  }

  // POST DELETE 
  function handleDelete() {
    dispatch(deletePost(post.id))
  }

  // HANDLE IF USER IS LOGGED IN ENABLE BUTTONS
  function postEdit() {
    if (currentUser === null) {
      return <>

      </>
    }
    else if (currentUser.username === postUser) {
      return <>
        <Button startIcon={<EditIcon className='editButton' onClick={handlePostOpen} />}></Button>
        <Button startIcon={<DeleteIcon color="secondary" className="deleteButton" onClick={handleDelete} />}></Button>
        <PostEdit post={post} hideEditPost={hideEditPost} setHideEditPost={setHideEditPost} />
      </>
    }
  }

  // HANDLE IF USER IS LOGGED IN ENABLE BUTTONS
  function createComment() {
    if (currentUser === null) {
      return <></>
    }
    else {
      return <>
        <Button onClick={handleCommentOpen} startIcon={<ReplyIcon />} style={{ position: "left" }}></Button>
        <CreateComment setHideCommentPost={setHideCommentPost} hideCommentPost={hideCommentPost} post={post} setComments={setComments} />
      </>
    }
  }

  // LINK TO USER PROFILE
  function creator(){
    if(currentUser.username === postUser){
      return <>{postUser}</>
    }
    else{
      return <Link href={`/profile/${postUser}`}>{postUser}</Link>
    }
  }

  return (
    <>
      <div>
        <Box style={{ paddingTop: 25 }}>
          <Typography>{post.title}</Typography>
          <Typography>{post.description}</Typography>
          <Typography>Link: {post.link}</Typography>
          <Typography>Creator: {creator()}</Typography>
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
            {createComment()}
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