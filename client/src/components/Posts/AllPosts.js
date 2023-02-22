import { Box, Button, Grid, Typography } from '@mui/material'
import React, {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import PostEdit from './PostEdit';
import { useSelector } from 'react-redux';

const AllPosts = ({currentUser}) => {

    const [hideEditPost, setHideEditPost] = useState(false)

    const posts = useSelector((state) => state.post.posts)
   
  
    const handlePostOpen = () => {setHideEditPost(true)}

    

    function postEdit(user){
        if(currentUser.username === user){
          return <>
          <Button startIcon={<EditIcon className='editButton' onClick={handlePostOpen}/>}></Button>
          <Button startIcon={<DeleteIcon color="secondary" className="deleteButton"/>}></Button>
          <PostEdit hideEditPost={hideEditPost} setHideEditPost={setHideEditPost} posts={posts}/>
          </>
        }}

    const displayAll = posts.map((data) => {
        return <><Grid item xs={4} style={{marginTop: 20}} key={data.id}>
            <Box>
            <Typography variant='h6'>{data.title}</Typography>
            <Typography>{data.description}</Typography>
            <Typography>Link: {data.link}</Typography>
            <Typography>User: {data.user.username}</Typography>
            </Box>
            <Button variant='contained' color="secondary" style={{marginTop: 10}}>Comment</Button>
            <div>{postEdit(data.user.username)}</div>
        </Grid>
        </>
    })


    

  return (
    <>
    <Typography variant="h4" style={{paddingTop: 100}}>Posts</Typography>
    <Grid container style={{paddingTop: 50}}>
        
        <Grid item xs={3} >
            <Typography variant='h4'>
                Categories
            </Typography>
        </Grid>
        {displayAll}
    </Grid>
    
    </>
  )
}

export default AllPosts