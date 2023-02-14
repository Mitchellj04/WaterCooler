import {Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import ProjectEdit from './ProjectEdit';

const ProjectList = ({project, setProjects currentUser, setErrorMain}) => {
    const [category, setCategory] = useState(project.categories)
    const [projectUser, setProjectUser] = useState(project.user.username)
    const [hideEditProject, setHideEditProject] = useState(false)
    const navigate = useNavigate()

    // console.log(currentUser)
    // console.log(projectUser)

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

    function projectEdit(){
        if(currentUser.username === projectUser){
          return <>
          <Button startIcon={<EditIcon className='editButton' onClick={handleProjectOpen}/>}></Button>
          <Button startIcon={<DeleteIcon color="secondary" className="deleteButton"/>}></Button>
          <ProjectEdit project={project} setProjects={setProjects} hideEditProject={hideEditProject} setHideEditProject={setHideEditProject}/>
          </>
        }
    }

  return (
    <div>
        <Box style={{paddingTop: 25}}>
        <Typography>{project.title}</Typography>
        <Typography>{project.description}</Typography>
        <Typography>{project.github_link}</Typography>
        <Typography>Creator: {projectUser}</Typography>
        {mapCategory}
        </Box>
        <Button variant='contained' color="secondary" onClick={hanldeProject} style={{marginTop: 15}}>Collaborate</Button>
        <div>
        {projectEdit()}</div>
    </div>
  )
}

export default ProjectList