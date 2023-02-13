import {Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const ProjectList = ({project, currentUser, setErrorMain}) => {
    const [category, setCategory] = useState(project.categories)
    const [projectUser, setProjectUser] = useState(project.user.username)
    const navigate = useNavigate()


    // console.log(currentUser)

    // function categoryNav(code){
    //   navigate(`/categories/${code}`)
    // }

    const mapCategory = category.map((data) => {
        return <Button variant='outlined' >{data.code}</Button>
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
    </div>
  )
}

export default ProjectList