import { Box, Button, Link, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { fetchProjects } from '../../Redux/projects/ProjectSlice'

import CollabMain from '../Collaboration/CollabMain'

const ProjectItem = ({ currentUser }) => {
  const { id } = useParams()
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  console.log(id)

  const projects = useSelector((state) => state.project.projects.filter((project) => project.id === parseInt(id)))
  const category = useSelector((state) => state.category.categories)


  const showProject = projects.map((project) => {
    return <>
      <Typography variant='h6' style={{ padding: 5, fontWeight: 'Bold' }}>{project.title}</Typography>
      <Typography style={{ marginTop: 10 }}>{project.description}</Typography>
      <Typography><Link href={project.github_link} target="_blank" rel='noopener noreferrer'>{project.github_link}</Link></Typography>
      <Typography style={{ marginTop: 10 }}>Creator: {project.user.username}</Typography>
    </>
  })

  console.log(category)


  const mapCategory = projects.map((data) => {
    <>{data.categories.map((cat) => {
      return <><Button key={cat.id}>{cat.code}</Button></>
    })}</>
  })

  const userCollabs = projects.map((collab) => <CollabMain collab={collab} currentUser={currentUser} />)



  return (
    <>
      <Box style={{ padding: 100 }}>
        <Paper>
          {showProject}
          {mapCategory}
        </Paper>
        <Paper style={{ padding: 50 }}>
          {userCollabs}
        </Paper>
      </Box>
    </>
  )
}

export default ProjectItem
