import { Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment } from '../../Redux/comment/CommentSlice'
import { deletePostComment } from '../../Redux/posts/PostSlice'
import Comment from './Comment'

const SinglePostComment = ({ comment, post }) => {

  console.log(comment)

  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user.users)


  const mapper = comment.map((comments) => <Comment postUser={post.user.username} comment={comments} post={post}/>)

  return (
    <>
      {mapper}
    </>
  )
}

export default SinglePostComment