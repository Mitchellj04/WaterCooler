import {Button, Link, Typography } from '@mui/material'
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
    // REDUX
    // REPLACE SET PROJECTS
    // REPLACE PROJECTS 
    // FIX PROJECT DELETE W/ SLICE


    const handleProjectOpen = () => {setHideEditProject(true)}

    const mapCategory = category.map((data) => {
        return <Button variant='outlined' key={data.id}>{data.code}</Button>
    })

    const hanldeProject = () => {
      if (currentUser === null){
        navigate('/login')
        setErrorMain(["Please login to collaborate"])
      }
      else{
      navigate(`/projects/${project.id}`)
    }
    }

    function handleDelete(){
      dispatch(deleteProject(project.id))
    }

    function projectEdit(){
        if(currentUser === null){
          return <>

          </>
        }
        else if(currentUser.username === projectUser){
          return <>
          <Button startIcon={<EditIcon className='editButton' onClick={handleProjectOpen}/>}></Button>
          <Button startIcon={<DeleteIcon color="secondary" className="deleteButton" onClick={handleDelete}/>}></Button>
          <ProjectEdit project={project} hideEditProject={hideEditProject} setHideEditProject={setHideEditProject}/>
          </>
        }
    }

    function creator(){
      if(currentUser.username === projectUser){
        return <>{projectUser}</>
      }
      else{
        return <Link href={`/profile/${projectUser}`}>{projectUser}</Link>
      }
    }

  return (
    <div>
        <Box style={{paddingTop: 25}}>
        <Typography>{project.title}</Typography>
        <Typography>{project.description}</Typography>
        <Typography>{project.github_link}</Typography>
        <Typography>Creator: {creator()}</Typography>
        {mapCategory}
        </Box>
        <Button variant='contained' color="secondary" onClick={hanldeProject} style={{marginTop: 15}}>Collaborate</Button>
        <div>
        {projectEdit()}</div>
    </div>
  )
}

export default ProjectList