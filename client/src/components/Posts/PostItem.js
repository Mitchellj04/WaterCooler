import { Box, Button, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPosts } from '../../Redux/posts/PostSlice'
import CreateComment from '../Comment/CreateComment'
import SinglePostComment from '../Comment/SinglePostComment'

const PostItem = ({ currentUser }) => {

    const { id } = useParams()
    const dispatch = useDispatch()


    const [hideCommentPost, setHideCommentPost] = useState(false)
    const handleCommentOpen = () => { setHideCommentPost(true) }

    console.log(id)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const post = useSelector((state) => state.post.posts.filter((post) => post.id === parseInt(id)))

    console.log(post)

    // LINK TO USER PROFILE
    function creator(postUser) {
        if (currentUser === null) { return <>{postUser}</> }
        else if (postUser === currentUser.username) { return <>{postUser}</> }
        else { return <Link href={`/userprofile/${postUser}`}>{postUser}</Link> }
    }


    const singlePost = post.map((post) => {
        return <>
            <div>
                <Box style={{ paddingTop: 45 }}>
                    <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{post.title}</Typography>
                    <Typography variant='body1' style={{ marginTop: 10 }}>{post.description}</Typography>
                    <Typography variant='body1'>Link:<Link href={post.link} target="_blank" rel='noopener noreferrer'> {post.link}</Link></Typography>
                    <Typography variant='body1'>Creator: {creator(post.user.username)}</Typography>
                </Box>
            </div>
            <Button variant='contained' onClick={handleCommentOpen}>Comment</Button>
            <CreateComment setHideCommentPost={setHideCommentPost} hideCommentPost={hideCommentPost} post={post} />
            <div>
                <SinglePostComment comment={post.comments} post={post}/>
            </div>
        </>
    })


    return (
        <div style={{ paddingTop: 100 }}>
            {singlePost}
        </div>
    )
}

export default PostItem