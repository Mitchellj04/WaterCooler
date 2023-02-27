import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers, fetchUser } from '../../features/users/AllUserSlice'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const UserProfile = () => {

    const dispatch = useDispatch()
    const {username} = useParams()

    console.log(username)
    useEffect(() => {
        dispatch(fetchUser(username))
    }, [])

    const user = useSelector((state) => state.allUser.allUsers)
    
    let projects = []
    
    const [posts, setPosts] = useState(user.posts)

    const userInfo = user.map((user) => {
       return <Box elevation="20" style={{padding: 100}}>
        <Typography variant='h4'>{user.name} Profile</Typography>
      <Paper>
          <Typography variant='h6' style={{fontWeight: "Bold"}}>Username: </Typography>{user.username}
         <Typography variant='h6' style={{fontWeight: "Bold"}}>Fullname: </Typography>{user.name}
          <Typography variant='h6' style={{fontWeight: "Bold"}}>Age: </Typography>{user.age}
         <Typography variant='h6' style={{fontWeight: "Bold"}}>Experience: </Typography>{user.experience}
         <Typography variant='h6' style={{fontWeight: "Bold"}}>Bio: </Typography>{user.bio}
      </Paper>
      </Box>
    })
    
    // const listProjects = projects.map((project) => {
    //     return <Box key={project.id}>
    //         <Paper style={{backgroundColor: 'inherit', margin: 10}}>
    //             <Typography>{project.title}</Typography>
    //             <Typography>{project.description}</Typography>
    //             <Typography>{project.github_link}</Typography>
    //             <Button variant="contained" color="secondary">Collaborate</Button>
    //         </Paper>
    //     </Box>
    // })

//     const listPosts = posts.map((project) => {
//       return <Box key={project.id}>
//           <Paper style={{backgroundColor: 'inherit', margin: 10}}>
//               <Typography>{project.title}</Typography>
//               <Typography>{project.description}</Typography>
//               <Typography>{project.link}</Typography>
//               <Button variant="contained" color="secondary">comments</Button>
//           </Paper>
//       </Box>
//   })
    

  return (
    <>
    <Grid container>
    <Grid item xs={12}>
            {userInfo}
        </Grid>
       <Grid item xs={6}>
            <Typography variant="h4">Projects</Typography>
           {/* {listProjects} */}
       </Grid>
       <Grid item xs={6}>
            <Typography variant="h4">Posts</Typography>
            {/* {listPosts} */}
       </Grid>
    </Grid>
    </>
  )
}

export default UserProfile