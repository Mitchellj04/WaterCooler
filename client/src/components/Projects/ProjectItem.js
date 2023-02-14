import { Box, Button, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProjectItem = () => {

  const [showProject, setShowProject] = useState([])
  const [category, setCategory] = useState([])
  const [projectUser, setProjectUser] = useState([])
  const [collaborate, setCollaborate] = useState(false)
  const {id} = useParams()

  console.log(id)
  useEffect(() => {
    fetch(`/projects/${id}`)
    .then((resp) => resp.json())
    .then((project) => {setShowProject(project)
    setCategory(project.categories)
    setProjectUser(project.user.username)})
  }, [])

  const mapCategory = category.map((data) => {
    return <Button key={data.id}>{data.code}</Button>
})

  const handleCollaboration = () => {
    setCollaborate(true)
  }

  console.log(collaborate)

  return (
    <>
      <Box style={{padding: 100}}>
        <Paper>
          <Typography>{showProject.title}</Typography>
          <Typography>{showProject.description}</Typography>
          <Typography>{showProject.github_link}</Typography>
          <Typography>Creator: {projectUser}</Typography>
          {mapCategory}
          <Button variant='contained' color='secondary' onClick={handleCollaboration}>Collaborate</Button>
        </Paper>
      </Box>
    
    </>
  )
}

export default ProjectItem
