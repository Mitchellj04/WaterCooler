import React, { useEffect, useState } from 'react'
import PostList from './PostList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../features/posts/PostSlice';

const PostMain = ({currentUser}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  // REDUX
  const postRedux = useSelector((state) => state.post.posts)
  console.log(postRedux)

  // MAP POSTS TO HOME
  const mapPosts = postRedux.map((post) => <PostList post={post} key={post.id} currentUser={currentUser}/>)

 

  return (
    <div>
      {mapPosts}
    </div>
  )
}

export default PostMain