import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import PostEdit from './PostEdit';
import { useSelector } from 'react-redux';
import CategoryMain from '../Categories/CategoryMain';
import { useNavigate } from 'react-router-dom';

const AllPosts = ({ currentUser }) => {

    

    const post = useSelector((state) => state.post.posts)
    const categories = useSelector((state) => state.category.categories)
    const navigate = useNavigate

    const [hideEditPost, setHideEditPost] = useState(false)
    const handlePostOpen = () => { setHideEditPost(true) }
  
    const handleClick = (e) => {
      e.preventDefault()
      // setSelected(e.target.value)
      navigate(`/categories/${e.target.value}`)
    }
  
    console.log(categories)


    function postEdit(user) {
        if (currentUser.username === user) {
            return <>
                <Button startIcon={<EditIcon className='editButton' onClick={handlePostOpen} />}></Button>
                <Button startIcon={<DeleteIcon color="secondary" className="deleteButton" />}></Button>
                <PostEdit hideEditPost={hideEditPost} setHideEditPost={setHideEditPost} post={post} />
            </>
        }
    }

    const categoryButton = categories.map((category) => {
        return <Grid item xs={2}><Box style={{ paddingTop: 20 }} key={category.id}>
          <Button id={category.id} value={category.code} variant="contained" onClick={handleClick}>{category.code}</Button>
        </Box></Grid>
      })
    

    const displayAll = post.map((data) => {
        return <>
            <Grid item xs={4} style={{ marginTop: 20 }} key={data.id}>
                <Box>
                    <Typography variant='h6'>{data.title}</Typography>
                    <Typography>{data.description}</Typography>
                    <Typography>Link: {data.link}</Typography>
                    <Typography>User: {data.user.username}</Typography>
                </Box>
                <Button variant='contained' color="secondary" style={{ marginTop: 10 }}>Comment</Button>
                <div>{postEdit(data.user.username)}</div>
            </Grid>
        </>
    })




    return (
        <>
            
            <Grid container style={{ paddingTop: 100 }}>
                <Grid item xs={12}><Typography variant="h4">Categories</Typography></Grid>
                {categoryButton}
                <Grid item xs={12}><Typography variant="h4" style={{ paddingTop: 50 }}>Posts</Typography></Grid>
                {displayAll}
            </Grid>

        </>
    )
}

export default AllPosts