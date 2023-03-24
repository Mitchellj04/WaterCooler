import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../Redux/users/AllUserSlice'
import { Box, Button, Grid, Link, Paper, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchProjects } from '../../Redux/projects/ProjectSlice'
import { fetchPosts } from '../../Redux/posts/PostSlice'

const UserProfile = () => {

  const { username } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // FETCH DATA
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

  // ALL PROJECTS FOR USER
  const listProjects = projects.map((project) => {
    if (project.user.username === user.username) {
      return <Box key={project.id}>
        <Paper style={{ backgroundColor: 'inherit', margin: 10 }}>
          <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{project.title}</Typography>
          <Typography>{project.description}</Typography>
          <Typography>Link: <Link href={project.github_link} target="_blank" rel='noopener noreferrer'>{project.github_link}</Link></Typography>
          <Button variant="contained" color="secondary" sx={{ backgroundColor: 'secondary.light' }} style={{ margin: 20 }} onClick={() => navigate(`/projects/${project.id}`)}>Collaborate</Button>
        </Paper>
      </Box>
    }
    else {
      return <></>
    }

  })

  // ALL POSTS FOR USER
  const listPosts = posts.map((post) => {
    if (post.user.username === user.username) {
      return <Box key={post.id}>
        <Paper style={{ backgroundColor: 'inherit', margin: 10 }}>
          <Typography>{post.title}</Typography>
          <Typography>{post.description}</Typography>
          <Typography>Link: <Link href={post.link} target="_blank" rel='noopener noreferrer'>{post.link}</Link></Typography>
          <Button variant="contained" color="secondary" id={post.id} onClick={() => navigate(`/posts/${post.id}`)}>comments</Button>
        </Paper>
      </Box>
    } else {
      return <></>
    }
  })


  return (
    <>
      <Grid container style={{ paddingTop: 100 }}>
        <Grid item xs={12} sx={{ borderBottom: 1 }}><Typography variant='h4'>{user.name} Profile</Typography></Grid>
        {/* <Box elevation="20" > */}
        {/* <Paper> */}
        <Grid item xs={2}><Typography variant='h6' style={{ fontWeight: "Bold", textAlign: 'left', marginLeft: 50 }}>Username:</Typography></Grid>
        <Grid item xs={10} style={{ textAlign: 'left' }}>{user.username}</Grid>
        <Grid item xs={2}><Typography variant='h6' style={{ fontWeight: "Bold", textAlign: 'left', marginLeft: 50 }}>Fullname: </Typography></Grid>
        <Grid item xs={10} style={{ textAlign: 'left' }}>{user.name}</Grid>
        <Grid item xs={2}><Typography variant='h6' style={{ fontWeight: "Bold", textAlign: 'left', marginLeft: 50 }}>Age: </Typography></Grid>
        <Grid item xs={10} style={{ textAlign: 'left' }}>{user.age}</Grid>
        <Grid item xs={2}><Typography variant='h6' style={{ fontWeight: "Bold", textAlign: 'left', marginLeft: 50 }}>Experience: </Typography></Grid>
        <Grid item xs={10} style={{ textAlign: 'left' }}>{user.experience}</Grid>
        <Grid item xs={2}><Typography variant='h6' style={{ fontWeight: "Bold", textAlign: 'left', marginLeft: 50 }}>Bio: </Typography></Grid>
        <Grid item xs={10} style={{ textAlign: 'left' }}>{user.bio}</Grid>
        <Grid item xs={12}></Grid>

        <Grid item xs={6} style={{ marginTop: 50 }} sx={{ borderBottom: 1, borderRight: 1 }}><Typography variant="h4">Projects</Typography></Grid>
        <Grid item xs={6} style={{ marginTop: 50 }} sx={{ borderBottom: 1, borderRight: 1 }}><Typography variant="h4">Posts</Typography></Grid>
        <Grid item xs={6} sx={{ borderRight: 1 }}> {listProjects}</Grid>
        <Grid item xs={6}> {listPosts}</Grid>
      </Grid>
    </>
  )
}

export default UserProfile