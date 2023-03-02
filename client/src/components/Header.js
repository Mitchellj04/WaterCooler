import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidenav from './Sidenav';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';

// const useStyles = makeStyles({
//   appBar: {
//       backgroundColor: "#1d79a4"
//     // backgroundImage: process.env.PUBLIC_URL + "/bubbles.jpg",
//     // backgroundRepeat: 'no-repeat',
//     // backgroundSize: 'cover',
//   }
// });


 function Header({currentUser, setCurrentUser, setErrorMain}){

  // const classes = useStyles();  
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
  }


  // const appStyle = {
  //   backgroundImage: process.env.PUBLIC_URL + "/bubbles.jpg"
  //   // backgroundColor:"#6c95e9",

  // }
  return (
    
    <div>
        <AppBar >
            <Toolbar>
                <Sidenav currentUser={currentUser} setCurrentUser={setCurrentUser} setErrorMain={setErrorMain}/>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    onClick={handleHome}>
                    <HomeIcon />
                </IconButton>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} style={{textAlign:"center"}}>WaterCooler</Typography>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    style={{align:"right"}}
                    color="inherit">
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>

    </div>
  )
}

export default Header