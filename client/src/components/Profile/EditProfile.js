import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, {useState} from 'react'

const EditProfile = ({currentUser, setCurrentUser, hideEditProfile, setHideEditProfile}) => {

   
    const [profile, setProfile] = useState(currentUser)
    // const [value, setValue] = useState(profile.experience_level)

    //Handle Dialog Open/Close
  
    const handleProfileClose = () => {setHideEditProfile(false)}

    const handleChange = (e) => {setProfile({...profile, [e.target.name]: e.target.value})}

    const handleEditSubmit = (e) => {
        e.preventDefault()
        const updatedUser = {
          username: profile.username,
          name: profile.name,
          age: profile.age,
          experience: profile.experience,
          bio: profile.bio
        }
        fetch(`/users/${currentUser.id}`, {
          method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedUser)
        })
        .then((resp) => resp.json())
        .then((user) => {setCurrentUser(user) 
          setHideEditProfile(false)
        })
      }

      //Styling
      const paperStyle ={
        padding: '30px 20px',
        width: 400, 
        margin: '20px auto'
    }
    const profileStyle ={
      padding: '30px 20px',
      width: 600, 
      margin: '20px auto',
      textAlign: "left"
    }
    const fieldStyle = {
      margin: '5px auto'
    }
    const boxStyle = {
      paddingTop: "100px",
      width: 500, 
      margin: '20px auto'

    }
    const textStyle = {
      paddingTop: 10
    }
  return (
    <>
    <Dialog
    open={hideEditProfile}
    keepMounted
    onClose={handleProfileClose}
    maxWidth="lg">
      <form onSubmit={handleEditSubmit}>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent style={paperStyle}>
        <TextField
            fullWidth 
            label="username"
            name="username"
            style={fieldStyle}
            value={profile.username} 
            onChange={handleChange}/>
        <TextField
            fullWidth 
            label="name"
            name="name"
            style={fieldStyle}
            value={profile.name} 
            onChange={handleChange}/>
       <TextField
            fullWidth 
            type={"number"}
            label="age"
            name="age"
            style={fieldStyle}
            value={profile.age} 
            onChange={handleChange}/>
        <TextField
            fullWidth 
            type={"text"}
            label="experience"
            style={fieldStyle}
            name="experience"
            value={profile.experience} 
            onChange={handleChange}/>  
      <TextField
            fullWidth 
            type={"text"}
            label="bio"
            style={fieldStyle}
            name="bio"
            value={profile.bio} 
            onChange={handleChange}/>
     
      </DialogContent>
      
      <DialogActions>
        <Button type="submit">Submit</Button>
        <Button onClick={handleProfileClose}>Close</Button>
      </DialogActions>
       </form>
  </Dialog>  
  </>
  )
}

export default EditProfile