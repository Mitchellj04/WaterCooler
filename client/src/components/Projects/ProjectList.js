import {Button, Link, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import {useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import ProjectEdit from './ProjectEdit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../../features/projects/ProjectSlice';
import { del } from '../../features/projects/ProjectSlice';

const ProjectList = ({project, setErrorMain}) => {
    const [category, setCategory] = useState(project.categories)
    const [projectUser, setProjectUser] = useState(project.user.username)
    const [hideEditProject, setHideEditProject] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // REDUX 
    const currentUser = useSelector((state) => state.user.users)
    const projects = useSelector((state) => state.project.projects)


    const handleProjectOpen = () => {setHideEditProject(true)}

    const mapCategory = category.map((data) => {
        return <Button variant='outlined' style={{marginTop: 15}} key={data.id}>{data.code}</Button>
    })

    const hanldeProject = () => {
      if (currentUser === null){
        navigate('/login')
        setErrorMain(["Please login to collaborate"])
      }
      else{ navigate(`/projects/${project.id}`)}}

    function handleDelete(){
      dispatch(deleteProject(project.id))
    }

    function projectEdit(){
        if(currentUser === null){ return <></> }
        else if(currentUser.username === projectUser){ return <>
          <Button startIcon={<EditIcon className='editButton' onClick={handleProjectOpen}/>}></Button>
          <Button startIcon={<DeleteIcon color="secondary" className="deleteButton" onClick={handleDelete}/>}></Button>
          <ProjectEdit project={project} hideEditProject={hideEditProject} setHideEditProject={setHideEditProject}/>
          </>}}

    function creator(){
      if(currentUser === null){ return <>{projectUser}</>}
      else if(currentUser.username === projectUser){ return <>{projectUser}</>}
      else { return <Link href={`/profile/${projectUser}`}>{projectUser}</Link>}}

    function collabs(){
      if (currentUser === null){
        return<Button 
                variant='contained' 
                color="secondary" 
                onClick={hanldeProject}  
                sx={{backgroundColor: 'secondary.light'}} 
                style={{marginTop: 15}}>Collaborate</Button>
      }
      else if(currentUser.username === projectUser)
          {return<Button 
                variant='contained' 
                onClick={hanldeProject} 
                sx={{backgroundColor: 'secondary.light'}} 
                style={{marginTop: 15}}>Collaborations</Button>}
      else {return <Button 
                variant='contained' 
                color="secondary" 
                sx={{backgroundColor: 'secondary.light'}} 
                onClick={hanldeProject} 
                style={{marginTop: 15}}>Collaborate</Button>}}

  return (
    <div>
        <Box style={{paddingTop: 25}}>
        <Typography variant='h6' style={{padding: 5, fontWeight: 'Bold'}}>{project.title}</Typography>
        <Typography style={{marginTop:10}}>{project.description}</Typography>
        <Typography>Link: <Link>{project.github_link}</Link></Typography>
        <Typography style={{marginTop:10}}>Creator: {creator()}</Typography>
        {mapCategory}
        <div>
        {collabs()}</div>
        <div>
        {projectEdit()}
        </div>
        </Box>
    </div>
  )
}

export default ProjectList