import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PostList from './PostList'

const PostMain = ({posts, setPosts, currentUser}) => {

  const postRedux = useSelector((state) => state.post.posts)
  // console.log(postRedux)

    const mapPosts = postRedux.map((post) => <PostList post={post} posts={posts} setPosts={setPosts} key={post.id} currentUser={currentUser}/>)

  return (
    <div>
      {mapPosts}
    </div>
  )
}

export default PostMain