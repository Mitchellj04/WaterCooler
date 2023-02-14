import React, {useState} from 'react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import EditProfile from './EditProfile'

const UserProfile = ({currentUser, setCurrentUser}) => {
    const [user, setUser] = useState(currentUser)
    const [userPosts, setUserPosts] = useState(currentUser.posts)
    const [userProjects, setUserProjects] = useState(currentUser.projects)
    const [hideEditProfile, setHideEditProfile] = useState(false)

    const handleProfileOpen = () => {setHideEditProfile(true)}
    

    console.log(user)

    const listProjects = userProjects.map((project) => {
        return <Box key={project.id}>
            <Paper style={{backgroundColor: 'inherit', margin: 10}}>
                <Typography>{project.title}</Typography>
                <Typography>{project.description}</Typography>
                <Typography>{project.github_link}</Typography>
                <Button variant="contained" color="secondary">Collaborations</Button>
            </Paper>
        </Box>
    })

    const listPosts = userPosts.map((project) => {
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
         <EditProfile currentUser={currentUser} setCurrentUser={setCurrentUser} hideEditProfile={hideEditProfile} setHideEditProfile={setHideEditProfile}/>
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

