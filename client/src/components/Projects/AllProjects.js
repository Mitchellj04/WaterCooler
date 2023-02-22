import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import { useSelector } from 'react-redux';

const AllProjects = () => {

    const projects = useSelector((state) => state.project.projects)
    const currentUser = useSelector((state) => state.user.users)


    function projectEdit(user){
        if(currentUser.username === user){
          return <>
          <Button startIcon={<EditIcon className='editButton'/>}></Button>
          <Button startIcon={<DeleteIcon color="secondary" className="deleteButton"/>}></Button></>
        }
    }

    const displayAll = projects.map((data) => {
        return <><Grid item xs={4} style={{marginTop: 20}} key={data.id}>
            <Box>
            <Typography variant='h6'>{data.title}</Typography>
            <Typography>{data.description}</Typography>
            <Typography>Link: {data.github_link}</Typography>
            <Typography>User: {data.user.username}</Typography>
            </Box>
            <Button variant='contained' color="secondary" style={{marginTop: 10}}>Collaborate</Button>
            <div>{projectEdit(data.user.username)}</div>
        </Grid>
        </>
    })


  return (
    <>
    <Typography variant="h4" style={{paddingTop: 100}}>Projects</Typography>
    <Grid container style={{paddingTop: 50}}>
        
        <Grid item xs={3} >
            <Typography variant='h4'>
                Categories
            </Typography>
        </Grid>
        {displayAll}
    </Grid>
    
    </>
  )
}

export default AllProjects