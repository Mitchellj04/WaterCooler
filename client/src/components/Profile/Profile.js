import React, {useEffect, useState} from 'react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import EditProfile from './EditProfile'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../features/users/UserSlice'
import { fetchProjects } from '../../features/projects/ProjectSlice'
import { fetchPosts } from '../../features/posts/PostSlice'

const Profile = ({currentUser}) => {

    const [hideEditProfile, setHideEditProfile] = useState(false)
    const dispatch = useDispatch()

    // REDUX 
    useEffect(() => {
        dispatch(fetchUser())
        dispatch(fetchProjects())
        dispatch(fetchPosts())
    }, [])

    const user = useSelector((state) => state.user.users)
    const projects = useSelector((state) => state.project.projects)
    const posts = useSelector((state) => state.post.posts)

    
   
    const handleProfileOpen = () => {setHideEditProfile(true)}
    

    console.log(user.username)
    console.log(projects)

    // function listProjects(){
    //     if(projects.user.username  === user.username){
    //         projects.map((project) => {
    //                     return <Box key={project.id}>
    //                         <Paper style={{backgroundColor: 'inherit', margin: 10}}>
    //                             <Typography>{project.title}</Typography>
    //                             <Typography>{project.description}</Typography>
    //                             <Typography>{project.github_link}</Typography>
    //                             <Button variant="contained" color="secondary">Collaborations</Button>
    //                         </Paper>
    //                     </Box>
    //                 })
    //     }
    //     else{
    //         return <>No projects available</>
    //     }
    // }



    const listProjects = projects.map((project) => {
        if(project.user.username === user.username){
        return <Box key={project.id}>
            <Paper style={{backgroundColor: 'inherit', margin: 10}}>
                <Typography>{project.title}</Typography>
                <Typography>{project.description}</Typography>
                <Typography>{project.github_link}</Typography>
                <Button variant="contained" color="secondary">Collaborations</Button>
            </Paper>
        </Box>}
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
      </Box>}
      else{
        return <></>
      }
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

export default Profile

