import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers, fetchUser } from '../../features/users/AllUserSlice'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { fetchProjects } from '../../features/projects/ProjectSlice'
import { fetchPosts } from '../../features/posts/PostSlice'

const UserProfile = () => {
    
    const {username} = useParams()
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(fetchUser(username))
        dispatch(fetchProjects())
        dispatch(fetchPosts())
    }, [])

    // REDUX
    const user = useSelector((state) => state.allUser.allUsers)
    const profileUser = useSelector((state) => state.user.users)
    const posts = useSelector((state) => state.post.posts)
    const projects = useSelector((state) => state.project.projects)
    

    // const newUser = profileUser.filter((user) => user.username === username)
    console.log(user)
    console.log(posts)
    console.log(projects)


    // const userInfo = user.map((user) => {
    //    return <Box elevation="20" style={{padding: 100}}>
    //     <Typography variant='h4'>{user.name} Profile</Typography>
    //   <Paper>
    //       <Typography variant='h6' style={{fontWeight: "Bold"}}>Username: </Typography>{user.username}
    //      <Typography variant='h6' style={{fontWeight: "Bold"}}>Fullname: </Typography>{user.name}
    //       <Typography variant='h6' style={{fontWeight: "Bold"}}>Age: </Typography>{user.age}
    //      <Typography variant='h6' style={{fontWeight: "Bold"}}>Experience: </Typography>{user.experience}
    //      <Typography variant='h6' style={{fontWeight: "Bold"}}>Bio: </Typography>{user.bio}
    //   </Paper>
    //   </Box>
    // })
    
    const listProjects = projects.map((project) => {
      if(project.user.username === user.username){
                return <Box key={project.id}>
            <Paper style={{backgroundColor: 'inherit', margin: 10}}>
                <Typography>{project.title}</Typography>
                <Typography>{project.description}</Typography>
                <Typography>{project.github_link}</Typography>
                <Button variant="contained" color="secondary">Collaborate</Button>
            </Paper>
        </Box>
      }
      else{
        return <></>
      }

    })

    const listPosts = posts.map((post) => {
      if(post.user.username === user.username){
      return <Box key={post.id}>
          <Paper style={{backgroundColor: 'inherit', margin: 10}}>
              <Typography>{post.title}</Typography>
              <Typography>{post.description}</Typography>
              <Typography>{post.link}</Typography>
              <Button variant="contained" color="secondary">comments</Button>
          </Paper>
      </Box>
      } else{
        return <></>
      }

  })
    

  return (
    <>
    <Grid container>
    <Grid item xs={12}>
    <Box elevation="20" style={{padding: 100}}>
      <Typography variant='h4'>{user.name} Profile</Typography>
    <Paper>
           <Typography variant='h6' style={{fontWeight: "Bold"}}>Username: </Typography>{user.username}
          <Typography variant='h6' style={{fontWeight: "Bold"}}>Fullname: </Typography>{user.name}
           <Typography variant='h6' style={{fontWeight: "Bold"}}>Age: </Typography>{user.age}
          <Typography variant='h6' style={{fontWeight: "Bold"}}>Experience: </Typography>{user.experience}
          <Typography variant='h6' style={{fontWeight: "Bold"}}>Bio: </Typography>{user.bio}
       </Paper>
    </Box>
        </Grid>
       <Grid item xs={6}>
            <Typography variant="h4">Projects</Typography>
           {listProjects}
       </Grid>
       <Grid item xs={6}>
            <Typography variant="h4">Posts</Typography>
            {listPosts}
       </Grid>
    </Grid>
    </>
  )
}

export default UserProfile