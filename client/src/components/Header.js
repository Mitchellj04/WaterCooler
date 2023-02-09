import React from 'react'
import { AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidenav from './Sidenav';
import { useNavigate } from "react-router-dom";

const Header = ({currentUser, setCurrentUser}) => {
    
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
  }

  return (
    
    <div>
        <AppBar>
            <Toolbar>
                <Sidenav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    onClick={handleHome}>
                    <HomeIcon />
                </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>WaterCooler</Typography>
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