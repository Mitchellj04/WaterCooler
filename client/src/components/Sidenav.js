import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/users/UserSlice';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


function Sidenav({ setErrorMain }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const currentUser = useSelector((state) => state.user.users)

  const handleDrawerOpen = () => { setOpen(true); };

  const handleDrawerClose = () => { setOpen(false); };

  // function handleLogout() {  }

  const handleLogout = (e) => {
    console.log(e.target.value)
    console.log("Logged Out!")
    dispatch(logout())
    navigate('/')
  }

  const handleProfile = () => {
    if (currentUser === null) {
      navigate('/login')
      setErrorMain(["Please login to see profile"])
    }
    else {
      navigate('/profile-main')
    }
  }

  const handleLogin = () => {
    if (currentUser === null) {
      navigate('/login')
      setErrorMain([])
    }
    else {
      navigate('/profile-main')
    }
  }

  const allProjects = () => {
    if (currentUser === null) {
      navigate('/login')
      setErrorMain(["Please login to see projects"])
    } else {
      navigate('/projects-all')
    }

  }

  const allPosts = () => {
    if (currentUser === null) {
      navigate('/login')
      setErrorMain(["Please login to see posts"])
    } else {
      navigate('/posts-all')
    }
  }

  const createPage = () => {
    if (currentUser === null) {
      navigate('/login')
      setErrorMain(["Please login to create"])
    }
    else {
      navigate('/create')
    }
  }


  const handleLog = () => {
    if (currentUser === null) {
      return <ListItem key={'login'} disablePadding>
        <ListItemButton onClick={handleLogin}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary={'login'} />
        </ListItemButton>
      </ListItem>
    }
    else {
      return <ListItem key={'logout'} disablePadding>
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={'logout'} />
        </ListItemButton>
      </ListItem>
    }
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton onClick={allPosts}>
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={allProjects}>
              <ListItemIcon>
                <DynamicFeedIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton >
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={createPage}>
              <ListItemIcon>
                <DynamicFeedIcon />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key={'profile'} disablePadding>
            <ListItemButton onClick={handleProfile}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={'profile'} />
            </ListItemButton>
          </ListItem>
          {handleLog()}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidenav