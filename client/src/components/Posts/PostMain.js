import React, { useEffect, useState } from 'react'
import PostList from './PostList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../Redux/posts/PostSlice';

const PostMain = ({currentUser}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  // REDUX
  const postRedux = useSelector((state) => state.post.posts)
  
  // MAP POSTS TO HOME
  const mapPosts = postRedux.map((post) => <PostList post={post} comments={post.comments} key={post.id} currentUser={currentUser}/>)

 

  return (
    <div>
      {mapPosts}
    </div>
  )
}

export default PostMain