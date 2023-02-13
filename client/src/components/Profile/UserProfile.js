import React, {useState} from 'react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'

const UserProfile = ({currentUser}) => {
    const [user, setUser] = useState(currentUser)
    const [userPosts, setUserPosts] = useState([])
    const [userProjects, setUserProjects] = useState(currentUser.projects)
      console.log(currentUser)

     
    

    console.log(currentUser.projects)

    const listProjects = userProjects.map((project) => {
        return <Box>
            <Paper>
                <Typography>{project.title}</Typography>
                <Typography>{project.description}</Typography>
                <Typography>{project.github_link}</Typography>
                <Button variant="contained" color="secondary">Collaborations</Button>
            </Paper>
        </Box>
    })
  return (
    <>
    <Grid container>
    <Grid item xs={12}>
     <Box elevation="20" style={{padding: 100}}>
         <Typography variant='h4'>Profile</Typography>
       <Paper>
           <Typography>Username: {user.username}</Typography>
          <Typography>Fullname: {user.name}</Typography>
           <Typography>Age: {user.age}</Typography>
          <Typography>Experience: {user.experience}</Typography>
       </Paper>
       </Box>
        </Grid>
       <Grid item xs={6}>
            <Typography variant="h4">Projects</Typography>
           {listProjects}
       </Grid>
       <Grid item xs={6}>
            <Typography variant="h4">Posts</Typography>
       </Grid>
    </Grid>
    </>
  )
}

export default UserProfile

