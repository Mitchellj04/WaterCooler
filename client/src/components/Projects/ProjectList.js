import { Alert, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const ProjectList = ({project, currentUser}) => {
    const [category, setCategory] = useState(project.categories)
    const navigate = useNavigate()

    const mapCategory = category.map((data) => {
        return <Button>{data.code}</Button>
    })

    console.log(currentUser)

    const hanldeProject = () => {
      if (currentUser === undefined){
        navigate('/login')
        Alert
      }
      else{
      navigate(`/projects/${project.id}`)
    }
    }

  return (
    <div>
        <Box>
        <Typography>{project.title}</Typography>
        <Typography>{project.description}</Typography>
        <Typography>{project.github_link}</Typography>
        {mapCategory}
        <Button variant='contained' color="secondary" onClick={hanldeProject}>Collaborate</Button>
        </Box>
    </div>
  )
}

export default ProjectList