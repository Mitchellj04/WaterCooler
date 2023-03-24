import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Link, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import EditProfile from './EditProfile'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../Redux/users/UserSlice'
import { deleteProject, fetchProjects } from '../../Redux/projects/ProjectSlice'
import { deletePost, fetchPosts } from '../../Redux/posts/PostSlice'
import { useNavigate } from 'react-router-dom'
import ProjectEdit from '../Projects/ProjectEdit';
import PostEdit from '../Posts/PostEdit';

const Profile = ({ currentUser }) => {

    // HANDLE EDIT MENU 
    const [hideEditProfile, setHideEditProfile] = useState(false)
    const handleProfileOpen = () => { setHideEditProfile(true) }

    // HANDLE EDIT PROJECT
    const [hideEditProject, setHideEditProject] = useState(false)
    const handleProjectOpen = () => { setHideEditProject(true) }

    //  HANDLE EDIT POST
    const [hideEditPost, setHideEditPost] = useState(false)
    const handlePostOpen = () => { setHideEditPost(true) }



    const dispatch = useDispatch()
    const navigate = useNavigate()

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



    // DELETE PROJECT HANDLER 
    function handleDelete(project) {
        dispatch(deleteProject(project))
    }

    // EDIT AND DELETE PROJECT BUTTONS 
    function projectEdit(project) {
        return <>
            <Button startIcon={<EditIcon className='editButton' onClick={handleProjectOpen} />}></Button>
            <Button startIcon={<DeleteIcon color="secondary" className="deleteButton" onClick={() => handleDelete(project.id)} />}></Button>
            <ProjectEdit project={project} hideEditProject={hideEditProject} setHideEditProject={setHideEditProject} />
        </>
    }

    // USER PROJECTS 
    const listProjects = projects.map((project) => {
        if (project.user.username === user.username) {
            return <Box key={project.id}>
                <Paper style={{ backgroundColor: 'inherit', margin: 10 }}>
                    <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{project.title}</Typography>
                    <Typography>{project.description}</Typography>
                    <Typography>Link: <Link href={project.github_link} target="_blank" rel='noopener noreferrer'>{project.github_link}</Link></Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ backgroundColor: 'secondary.light' }}
                        onClick={() => navigate(`/projects/${project.id}`)}
                        style={{ margin: 20 }}>Collaborations</Button>
                    <div>{projectEdit(project)}</div>
                </Paper>

            </Box>
        }
        else {
            return <></>
        }
    })

    // POST DELETE 
    function handlePostDelete(post) {
        dispatch(deletePost(post))
    }

    function postEdit(posts) {
        return <>
            <Button startIcon={<EditIcon className='editButton' onClick={handlePostOpen} />}></Button>
            <Button startIcon={<DeleteIcon color="secondary" className="deleteButton" onClick={() => handlePostDelete(posts.id)} />}></Button>
            <PostEdit post={posts} hideEditPost={hideEditPost} setHideEditPost={setHideEditPost} />
        </>
    }

    // USER POSTS 
    const listPosts = posts.map((post) => {
        if (post.user.username === user.username) {
            return <Box key={post.id}>
                <Paper style={{ backgroundColor: 'inherit', margin: 10 }}>
                    <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{post.title}</Typography>
                    <Typography>{post.description}</Typography>
                    <Typography>Link: <Link href={post.link} target="_blank" rel='noopener noreferrer'>{post.link}</Link></Typography>
                    <Button variant="contained" color="secondary" sx={{ backgroundColor: 'secondary.light' }} id={post.id} style={{ margin: 20 }} onClick={() => navigate(`/posts/${post.id}`)}>comments</Button>
                    <div>{postEdit(post)}</div>
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
                <Grid item xs={10} sx={{ borderBottom: 1 }}><Typography variant='h4'>Profile</Typography></Grid>
                <Grid item xs={2} sx={{ borderBottom: 1 }}>
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

                <Grid item xs={6} style={{ marginTop: 50 }} sx={{ borderBottom: 1, borderRight: 1 }}> <Typography variant="h4">Projects</Typography> </Grid>
                <Grid item xs={6} style={{ marginTop: 50 }} sx={{ borderBottom: 1 }}> <Typography variant="h4">Posts</Typography>  </Grid>
                <Grid item xs={6} sx={{ borderRight: 1 }}> {listProjects}</Grid>
                <Grid item xs={6}> {listPosts}</Grid>


            </Grid>
        </>
    )
}

export default Profile

