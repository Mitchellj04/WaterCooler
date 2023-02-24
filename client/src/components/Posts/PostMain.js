import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PostList from './PostList'

const PostMain = ({currentUser}) => {

  // REDUX
  const postRedux = useSelector((state) => state.post.posts)

  // MAP POSTS TO HOME
  const mapPosts = postRedux.map((post) => <PostList post={post} key={post.id} currentUser={currentUser}/>)

  const post = postRedux.filter((post) => post.id == 90)
  // console.log(post[0].comments)
  return (
    <div>
      {mapPosts}
    </div>
  )
}

export default PostMain