import { Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment } from '../../Redux/comment/CommentSlice'

const SinglePostComment = ({comment}) => {

    console.log(comment)
    
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user.users)

    // const handleDelete = (id) => { dispatch(deleteComment(id)) }

    // function userComment(user, id) {
    //   if(currentUser === null){
    //     return<></>
    //   } 
    //   else if(currentUser.username === user) {
    //     return <><Button>Edit</Button>
    //       <Button onClick={handleDelete(id)}>Delete</Button>
    //     </>
    //   }
      
    // }

    const commentMap = comment.map((comments) => {
        return <div style={{padding: 20}}>
            {comments.user.username}: <Typography>{comments.answer}</Typography>
            {/* {userComment(comments.user.username, comments.id)} */}
       </div>
    })
  return (
    <>
    {commentMap}
    </>
  )
}

export default SinglePostComment