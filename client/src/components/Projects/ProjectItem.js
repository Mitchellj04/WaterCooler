import { Box, Button, Link, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { createCollab } from '../../features/Collaboration/CollabsSlice'
import { fetchProjects } from '../../features/projects/ProjectSlice'
import CollabMain from '../Collaboration/CollabMain'

const ProjectItem = ({currentUser}) => {

  // const [showProject, setShowProject] = useState([])
  // const [category, setCategory] = useState([])
  // const [projectUser, setProjectUser] = useState([])
  // const [collaborate, setCollaborate] = useState([])
    const [projectUser, setProjectUser] = useState(false)
  const {id} = useParams()
  const dispatch = useDispatch()

  console.log(id)


  const project = useSelector((state) => state.project.projects)

  const showProject = project.find((project) => project.id === parseInt(id))

  // const filterCollabs = showProject.collaborations.filter((collab) =>{
  //   if(collab.user.username === currentUser){
  //       setProjectUser(true)
  //   }
  //   else{
  //       setProjectUser(false)
  //   }
  // })

//   const mapCategory = category.map((data) => {
//     return <Button key={data.id}>{data.code}</Button>
// })

  console.log(currentUser)
  console.log(showProject)

  const newCollab = {
    user_id: currentUser.id,
    project_id: showProject.id,
    collaborate: true
  }

  const handleCollab = () => {
    console.log(newCollab)
    setProjectUser(true)
    dispatch(createCollab({newCollab}))
  }

  // const showCollabs = 

  function userCollabs(){
    if(currentUser.username === showProject.user.username){
      return showProject.collaborations.map((collab) => <CollabMain collab={collab} currentUser={currentUser}/>)
    }
    else if (projectUser === false){
      return <Button variant='contained' color='secondary' onClick={handleCollab}>Collaborate</Button>
    }
    else if (projectUser === true){
      return <>You have already collaborated</>
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
          {/* {mapCategory} */}
          
          
        </Paper> 
        <Paper style={{padding: 50}}>
          {userCollabs()}
          {/* {showCollabs} */}
          {/* {Collaborators()} */}
        </Paper>
      </Box>
    </>
  )
}

export default ProjectItem
