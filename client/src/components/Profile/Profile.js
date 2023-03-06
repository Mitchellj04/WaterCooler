import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Link, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import EditProfile from './EditProfile'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../features/users/UserSlice'
import { fetchProjects } from '../../features/projects/ProjectSlice'
import { fetchPosts } from '../../features/posts/PostSlice'

const Profile = ({ currentUser }) => {

    const [hideEditProfile, setHideEditProfile] = useState(false)
    const dispatch = useDispatch()

    // FETCH TO REDUX SLICE
    useEffect(() => {
        dispatch(fetchUser())
        dispatch(fetchProjects())
        dispatch(fetchPosts())
    }, [])

    // REDUX 
    const user = useSelector((state) => state.user.users)
    const projects = useSelector((state) => state.project.projects)
    const posts = useSelector((state) => state.post.posts)

    // HANDLE EDIT MENU 
    const handleProfileOpen = () => { setHideEditProfile(true) }

    // USER PROJECTS 
    const listProjects = projects.map((project) => {
        if (project.user.username === user.username) {
            return <Box key={project.id}>
                <Paper style={{ backgroundColor: 'inherit', margin: 10 }}>
                    <Typography variant='h6' style={{padding: 5, fontWeight: 'Bold'}}>{project.title}</Typography>
                    <Typography>{project.description}</Typography>
                    <Typography>Link: <Link>{project.github_link}</Link></Typography>
                    <Button variant="contained" color="secondary" sx={{backgroundColor: 'secondary.light'}} style={{margin: 20}}>Collaborations</Button>
                </Paper>
            </Box>
        }
        else {
            return <></>
        }
    })

    // USER POSTS 
    const listPosts = posts.map((post) => {
        if (post.user.username === user.username) {
            return <Box key={post.id}>
                <Paper style={{ backgroundColor: 'inherit', margin: 10 }}>
                    <Typography variant='h6' style={{padding: 5, fontWeight: 'Bold'}}>{post.title}</Typography>
                    <Typography>{post.description}</Typography>
                    <Typography>Link: <Link>{post.link}</Link></Typography>
                    <Button variant="contained" color="secondary" sx={{backgroundColor: 'secondary.light'}} style={{margin: 20}}>comments</Button>
                </Paper>
            </Box>
        }
        else {
            return <></>
        }
    })

    return (
        <>
            <Grid container style={{ paddingTop: 100 }}>
                <Grid item xs={10} sx={{ borderBottom: 1}}><Typography variant='h4'>Profile</Typography></Grid>
                <Grid item xs={2} sx={{ borderBottom: 1}}>
                    <Button className='task-button-edit' onClick={handleProfileOpen} startIcon={<EditIcon className='editButton' />}></Button>
                    <EditProfile hideEditProfile={hideEditProfile} setHideEditProfile={setHideEditProfile} />
                </Grid>
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

                <Grid item xs={6} style={{marginTop: 50}} sx={{ borderBottom: 1, borderRight: 1}}> <Typography variant="h4">Projects</Typography> </Grid>
                <Grid item xs={6} style={{marginTop: 50}} sx={{ borderBottom: 1}}> <Typography variant="h4">Posts</Typography>  </Grid>
                <Grid item xs={6} sx={{ borderRight: 1}}> {listProjects}</Grid>
                <Grid item xs={6}> {listPosts}</Grid>
                
                
            </Grid>
        </>
    )
}

export default Profile

