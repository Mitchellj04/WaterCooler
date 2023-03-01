import { Box, Button, Link, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { createCollab } from '../../features/Collaboration/CollabsSlice'
import { fetchProjects } from '../../features/projects/ProjectSlice'

const ProjectItem = ({currentUser}) => {

  // const [showProject, setShowProject] = useState([])
  const [category, setCategory] = useState([])
  // const [projectUser, setProjectUser] = useState([])
  // const [collaborate, setCollaborate] = useState([])
  const {id} = useParams()
  const dispatch = useDispatch()

  console.log(id)


  const project = useSelector((state) => state.project.projects)

  const showProject = project.find((project) => project.id === parseInt(id))

  const mapCategory = category.map((data) => {
    return <Button key={data.id}>{data.code}</Button>
})

  console.log(currentUser)
  const newCollab = {
    user_id: currentUser.id,
    project_id: showProject.id,
    collaborate: true
  }

  const handleCollab = () => {
    console.log(newCollab)
    dispatch(createCollab({newCollab}))
  }

  function Collaborators(){
    if(showProject.collaborations.length > 0){
      return showProject.collaborations.map((collab) => {
        if(collab.user.username !== currentUser.username){
          return <><Link href={`/profile/${collab.user.username}`}>{collab.user.username}</Link> want to collaborate with you</>
        }else {
          return <>You already asked to Collaborate</>
        }
        
      })
    }
    else if (showProject.user.username === currentUser.username){
      return <>See collaborations below</>
    }
    else if(showProject.collaborations.length > 0 && currentUser.username !== showProject.user.username) {
      return <Button variant='contained' color='secondary' onClick={handleCollab}>Collaborate</Button>
    }
    else {
      return <Button variant='contained' color='secondary' onClick={handleCollab}>Collaborate</Button>
    }
  }



  
  console.log(showProject)

  return (
    <>
      <Box style={{padding: 100}}>
        <Paper>
          <Typography>{showProject.title}</Typography>
          <Typography>{showProject.description}</Typography>
          <Typography>{showProject.github_link}</Typography>
          <Typography>Creator: {showProject.user.username}</Typography>
          {mapCategory}
          
          
        </Paper> 
        <Paper style={{padding: 50}}>
          {Collaborators()}
        </Paper>
      </Box>
    </>
  )
}

export default ProjectItem
