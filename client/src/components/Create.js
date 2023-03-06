import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import CreatePost from './Posts/CreatePost'
import CreateProject from './Projects/CreateProject'

const Create = ({currentUser}) => {

    const [projectCreate, setProjectCreate] = useState(true)

    function buttonSwitch(){
        if(projectCreate === true){
            return <Button onClick={() => setProjectCreate(false)}>Post Create</Button>
        }
        else{
            return <Button onClick={() => setProjectCreate(true)}>Project Create</Button>
        }
    }
  return (
    <>
    <div style={{paddingTop: 100}}>
    {buttonSwitch()}</div>
    <Grid container>
    { projectCreate ? (
    <>
        <CreateProject currentUser={currentUser}/>
    </>): (
    <>
        <CreatePost currentUser={currentUser} />
    
    </>)}
    
    </Grid>
    </>
  )
}

export default Create