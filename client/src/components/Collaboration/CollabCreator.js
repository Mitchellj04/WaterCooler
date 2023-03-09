import { Button, Link } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { acceptedCollab } from '../../Redux/projects/ProjectSlice'

const CollabCreator = ({collab}) => {

    const dispatch = useDispatch()

    const {id} = useParams()

    console.log(collab)
    console.log(id)

    const data = {
        id: id,
        collab_id: collab.id,
        collab: {
        user: collab.user,
        collaborate: true, 
        acceptance: true }
    }

    const handleAccept = () => {
        
        dispatch(acceptedCollab(data))
    }


    function Collaborators(){
        if(collab.acceptance === null){
            return <><Link>{collab.user.username}</Link> wants to collaborate on this project <Button onClick={handleAccept}>Accept</Button></>
        }
        else if(collab.acceptance === true){
            return <>You have accepted to collaborate with <Link href={`/profile/${collab.user.username}`}>{collab.user.name}</Link> see profile to message them.</>
        }
      }

  return (
    <div>{Collaborators()}</div>
  )
}

export default CollabCreator