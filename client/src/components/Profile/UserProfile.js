import React, {useEffect, useState} from 'react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import EditProfile from './EditProfile'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../features/users/UserSlice'

const UserProfile = () => {

    const [hideEditProfile, setHideEditProfile] = useState(false)
    const dispatch = useDispatch()

    // REDUX 
    const user = useSelector((state) => state.user.users)
    const [projects, setProjects] = useState(user.projects)
    const [posts, setPosts] = useState(user.posts)
    // const projects = useSelector((state) => state.user.users.projects)
    // const posts = useSelector((state) => state.user.users.posts)
    // REDUX 
    // FIX EDIT PROFILE USERSLICE
    
   
    const handleProfileOpen = () => {setHideEditProfile(true)}
    

    console.log(user)



    const listProjects = projects.map((project) => {
        return <Box key={project.id}>
            <Paper style={{backgroundColor: 'inherit', margin: 10}}>
                <Typography>{project.title}</Typography>
                <Typography>{project.description}</Typography>
                <Typography>{project.github_link}</Typography>
                <Button variant="contained" color="secondary">Collaborations</Button>
            </Paper>
        </Box>
    })

    const listPosts = posts.map((project) => {
      return <Box key={project.id}>
          <Paper style={{backgroundColor: 'inherit', margin: 10}}>
              <Typography>{project.title}</Typography>
              <Typography>{project.description}</Typography>
              <Typography>{project.link}</Typography>
              <Button variant="contained" color="secondary">comments</Button>
          </Paper>
      </Box>
  })
  return (
    <>
    <Grid container>
    <Grid item xs={12}>
     <Box elevation="20" style={{padding: 100}}>
         <Typography variant='h4'>Profile</Typography>
         <Button className='task-button-edit' onClick={handleProfileOpen} startIcon={<EditIcon className='editButton'/>}></Button>
         <EditProfile hideEditProfile={hideEditProfile} setHideEditProfile={setHideEditProfile}/>
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

