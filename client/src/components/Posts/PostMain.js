import React, { useEffect, useState } from 'react'
import PostList from './PostList'

const PostMain = ({posts, setPosts, currentUser}) => {

  // const [posts, setPosts] = useState([])

  //   useEffect(() => {
  //       fetch('/posts')
  //       .then((resp) => resp.json())
  //       .then((data) => setPosts(data))
  //   }, [])

    // console.log(posts)

    const mapPosts = posts.map((post) => <PostList post={post} posts={posts} setPosts={setPosts} key={post.id} currentUser={currentUser}/>)

  return (
    <div>
      {mapPosts}
    </div>
  )
}

export default PostMain