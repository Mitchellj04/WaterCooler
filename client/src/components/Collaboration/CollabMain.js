import { Button, Link } from '@mui/material'
import React from 'react'

const CollabMain = ({collab, currentUser}) => {

    console.log(currentUser)
    console.log(collab.acceptance)

    // function Collaborators(){
    //     if(showProject.collaborations.length > 0){
    //       return showProject.collaborations.map((collab) => {
    //         if(collab.user.username !== currentUser.username){
    //           return <><Link href={`/profile/${collab.user.username}`}>{collab.user.username}</Link> want to collaborate with you</>
    //         }else {
    //           return <>You already asked to Collaborate</>
    //         }
            
    //       })
    //     }
    //     else if (showProject.user.username === currentUser.username){
    //       return <>See collaborations below</>
    //     }
    //     else if(showProject.collaborations.length > 0 && currentUser.username !== showProject.user.username) {
    //       return <Button variant='contained' color='secondary' onClick={handleCollab}>Collaborate</Button>
    //     }
    //     else {
    //       return <Button variant='contained' color='secondary' onClick={handleCollab}>Collaborate</Button>
    //     }
    //   }

      function Collaborators(){
        if(collab.acceptance === null){
            return <><Link>{collab.user.username}</Link> wants to collaborate on this project <Button>Accept</Button></>
        }
        else if(collab.acceptance === true){
            return <>You have accepted to collaborate with {collab.user.name} see profile to message them.</>
        }
      }

  return (
    <div>
        {Collaborators()}
    </div>
  )
}

export default CollabMain