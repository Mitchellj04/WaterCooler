import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';

const ProjectItem = ({project}) => {
    const [category, setCategory] = useState(project.categories)

    const mapCategory = category.map((data) => {
        return <Button>{data.code}</Button>
    })

  return (
    <div>
        <Box>
        <Typography>{project.title}</Typography>
        <Typography>{project.description}</Typography>
        <Typography>{project.github_link}</Typography>
        {mapCategory}
        </Box>
    </div>
  )
}

export default ProjectItem