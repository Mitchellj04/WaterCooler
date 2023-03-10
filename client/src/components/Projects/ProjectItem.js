import { Box, Button, Paper, Typography } from '@mui/material'
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


  const showProject = projects.map((project) => {
    return <>
      <Typography>{project.title}</Typography>
      <Typography>{project.description}</Typography>
      <Typography>{project.github_link}</Typography>
      <Typography>Creator: {project.user.username}</Typography>
    </>
  })

  console.log(projects)


  const mapCategory = projects.map((data) => {
    return <>{data.categories.map((cat) => {
      <><Button key={cat.id}>{cat.code}</Button></>
    })}</>
  })

  const userCollabs = projects.map((collab) => <CollabMain collab={collab} currentUser={currentUser} />)



  return (
    <>
      <Box style={{ padding: 100 }}>
        <Paper>
          {showProject}
          {/* {mapCategory} */}


        </Paper>
        <Paper style={{ padding: 50 }}>
          {userCollabs}
        </Paper>
      </Box>
    </>
  )
}

export default ProjectItem
