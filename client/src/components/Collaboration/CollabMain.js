import { Alert, Button, Link } from '@mui/material'
import React, { useState } from 'react'
import CollabCreator from './CollabCreator'
import CollabUser from './CollabUser'

const CollabMain = ({ collab, currentUser }) => {

  console.log(collab.length)

  function collaborations() {
    if (currentUser.username === collab.user.username) {
      if(collab.collaborations.length > 0 ){
        return collab.collaborations.map((collab) => <CollabCreator collab={collab} currentUser={currentUser} />)
      }
      else {
        return <><Alert severity='info'>You currently have no collaborations</Alert></>
      }
    }
    else {
      return <CollabUser projects={collab} currentUser={currentUser} />
    }
  }

  return (
    <div>
      {collaborations()}
    </div>
  )
}

export default CollabMain