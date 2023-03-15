import { Button, Link } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProjectCollab } from '../../Redux/projects/ProjectSlice'

const CollabUser = ({ projects, currentUser }) => {
  const dispatch = useDispatch()

  const [projectUser, setProjectUser] = useState(false)
  const [message, setMessage] = useState('')

  const data = {
    id: projects.id,
    collab: {
      user_id: currentUser.id,
      project_id: projects.id,
      collaborate: true
    }
  }

  const handleCollab = () => {
    setProjectUser(true)
    dispatch(addProjectCollab(data))
    setMessage("You asked to collaborate on this project")
  }

  const alreadyCollaborated = projects.collaborations.filter((collab) => collab.user.username === currentUser.username)

  console.log(alreadyCollaborated.length)

  function userCollabs() {
    if (alreadyCollaborated.length > 0) {
      return <>You have already asked to collaborate with <Link>{projects.user.username}</Link></>
    }
    else if (projectUser === false) {
      return <Button variant='contained' color='secondary' onClick={handleCollab}>Collaborate</Button>
    }
  }

  return (
    <div>{userCollabs()}</div>
  )
}

export default CollabUser