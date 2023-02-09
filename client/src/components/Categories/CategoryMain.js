import { Button } from '@mui/material'
import React from 'react'

const CategoryMain = () => {
  return (
    <div>
    <Box>
        <Paper>
        <Button variant='contained'>React</Button>
        <Button variant='contained'>Ruby</Button>
        <Button variant='contained'>Javascript</Button>
        <Button variant='contained'>C++</Button>
        </Paper>
    </Box>
    </div>
  )
}

export default CategoryMain