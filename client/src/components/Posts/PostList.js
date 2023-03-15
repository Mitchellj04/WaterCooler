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
import { deletePost } from '../../Redux/posts/PostSlice';
import { fetchComment } from '../../Redux/comment/CommentSlice';
import { useNavigate } from 'react-router-dom';



const PostList = ({ post, comments, setErrorMain }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [postUser, setPostUser] = useState(post.user.username)
  const [category, setCategory] = useState(post.categories)
  // const [comments, setComments] = useState(post.comments)

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
  const postComment = useSelector((state) => state.post.posts.comments)

  const handleCategory = (e) => {
    e.preventDefault()
    if (currentUser === null) {
      setErrorMain(['Please login first'])
      navigate('/login')
    }
    else {
      navigate(`/categories/${e.target.value}`)
    }
  }

  // MAP COMMENTS TO POST
  const mapComments = comments.map((comment) => <Comment key={comment.id} post={post} postUser={postUser} comment={comment} currentUser={currentUser} />)

  // MAP CATEGORY TO POST
  const mapCategory = category.map((data) => { return <Button variant='outlined' value={data.code} key={data.id} onClick={handleCategory}>{data.code}</Button> })


  // HANDLE EMPTY COMMENT ALERT
  function emptyComment() {
    if (comments.length > 0) { return <> {mapComments} </> }
    else { return <Alert severity='info'>Please add a comment to answer</Alert> }
  }

  // POST DELETE 
  function handleDelete() {
    dispatch(deletePost(post.id))
  }

  // HANDLE IF USER IS LOGGED IN ENABLE BUTTONS
  function postEdit() {
    if (currentUser === null) { return <></> }
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
    if (currentUser === null) { return <></> }
    else {
      return <>
        <Button onClick={handleCommentOpen} startIcon={<ReplyIcon />} style={{ position: "left" }}></Button>
        <CreateComment setHideCommentPost={setHideCommentPost} hideCommentPost={hideCommentPost} post={post} />
      </>
    }
  }


  // LINK TO USER PROFILE
  function creator() {
    if (currentUser === null) { return <>{postUser}</> }
    else if (postUser === currentUser.username) { return <>{postUser}</> }
    else { return <Link onClick={() => navigate(`/userprofile/${postUser}`)}>{postUser}</Link> }
  }

  return (
    <>
      <div>
        <Box style={{ paddingTop: 45 }}>
          <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{post.title}</Typography>
          <Typography variant='body1' style={{ marginTop: 10 }}>{post.description}</Typography>
          <Typography variant='body1'>Link:<Link href={post.link}> {post.link}</Link></Typography>
          <Typography variant='body1'>Creator: {creator()}</Typography>
          {mapCategory}
        </Box>
      </div>
      <Box>
        <Accordion className="Accordion-side" style={{ width: "100%", color: "white", backgroundColor: "#295b9d", marginTop: 10 }}>
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