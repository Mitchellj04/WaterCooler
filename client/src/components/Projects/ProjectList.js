import { Button, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import ProjectEdit from './ProjectEdit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../../Redux/projects/ProjectSlice';

const ProjectList = ({ project, setErrorMain }) => {

  // REDUX 
  const currentUser = useSelector((state) => state.user.users)
  const projects = useSelector((state) => state.project.projects)
  const dispatch = useDispatch()

  // REACT STATE
  const [category, setCategory] = useState(project.categories)
  const [projectUser, setProjectUser] = useState(project.user.username)
  const [hideEditProject, setHideEditProject] = useState(false)
  const navigate = useNavigate()

  
  const handleCategory = (e) => {
    e.preventDefault()
    if (currentUser === null) {
      setErrorMain(['Please login first'])
      navigate('/login')
    }
    else {
      navigate(`/categories/${e.target.value}`)
    }
  }

  // HANDLE EDIT WINDOW 
  const handleProjectOpen = () => { setHideEditProject(true) }

  // CATERGORY BUTTONS 
  const mapCategory = category.map((category) => {
    return <Button variant='contained' value={category.code} style={{ margin: 5 }} key={category.id} onClick={handleCategory}>{category.code}</Button>
  })

  // DELETE ACTION HANDLER 
  function handleDelete() {
    dispatch(deleteProject(project.id))
  }

  // NAVIGATE TO USER 
  const handleUser = () => {
    navigate(`/userprofile/${projectUser}`)
  }

  // EDIT AND DELETE BUTTONS 
  function projectEdit() {
    if (currentUser === null) { return <></> }
    else if (currentUser.username === projectUser) {
      return <>
        <Button startIcon={<EditIcon className='editButton' onClick={handleProjectOpen} />}></Button>
        <Button startIcon={<DeleteIcon color="secondary" className="deleteButton" onClick={handleDelete} />}></Button>
        <ProjectEdit project={project} hideEditProject={hideEditProject} setHideEditProject={setHideEditProject} />
      </>
    }
  }

  // HANDLE PROJECT CREATOR LINK
  function creator() {
    if (currentUser === null) { return <>{projectUser}</> }
    else if (currentUser.username === projectUser) { return <>{projectUser}</> }
    else { return <Link onClick={handleUser}>{projectUser}</Link> }
  }

  // PROJECT COLLAB NAVIGATE 
  const hanldeProject = () => {
    if (currentUser === null) {
      navigate('/login')
      setErrorMain(["Please login to collaborate"])
    }
    else { navigate(`/projects/${project.id}`) }
  }

  // HANDLE PROJECT COLLAB BUTTON
  function collabs() {
    if (currentUser === null) {
      return <Button
        variant='contained'
        color="secondary"
        onClick={hanldeProject}
        sx={{ backgroundColor: 'secondary.light' }}
        style={{ marginTop: 15 }}>Collaborate</Button>
    }
    else if (currentUser.username === projectUser) {
      return <Button
        variant='contained'
        onClick={hanldeProject}
        sx={{ backgroundColor: 'secondary.light' }}
        style={{ marginTop: 15 }}>Collaborations</Button>
    }
    else {
      return <Button
        variant='contained'
        color="secondary"
        sx={{ backgroundColor: 'secondary.light' }}
        onClick={hanldeProject}
        style={{ marginTop: 15 }}>Collaborate</Button>
    }
  }


  return (
    <div>
      <Box style={{ marginBottom: 5, paddingTop: 25, paddingBottom: 5, border: '2px solid #6fa2e4', color: 'black', borderRadius: 8}}>
        <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{project.title}</Typography>
        <Typography style={{ marginTop: 10 }}>{project.description}</Typography>
        <Typography>Link: <Link href={project.github_link} target="_blank" rel='noopener noreferrer'>{project.github_link}</Link></Typography>
        <Typography style={{ marginTop: 10 }}>Creator: {creator()}</Typography>
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