import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import ProjectList from './components/Projects/ProjectList';
import Login from './components/Login/Login';
import ProjectItem from './components/Projects/ProjectItem';
import CategoryItem from './components/Categories/CategoryItem';
import AllProjects from './components/Projects/AllProjects';
import Profile from './components/Profile/Profile';
import PostList from './components/Posts/PostList';
import AllPosts from './components/Posts/AllPosts';
import Create from './components/Create';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './Redux/users/UserSlice';
import UserProfile from './components/Profile/UserProfile';
import { createTheme, ThemeProvider, colors } from '@mui/material';
import PostItem from './components/Posts/PostItem';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[700]
    },
    secondary: {
      main: colors.red[800],
      light: colors.amber[500]
    }
  },
  typography: {
    h6: {
      fontFamily: [
        'Golos Text',
        'sans-serif'
      ].join(',')
    },
    body1: {
      fontFamily: [
        'Golos Text',
        'sans-serif'
      ].join(',')
    },
    button: {
      fontFamily: [
        'Golos Text',
        'sans-serif'
      ]
    },
    fontFamily: [
      'Gloock',
      'serif',
    ].join(','),
  }
});

function App() {

  // REDUX
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  // USER
  const reduxCurrentUser = useSelector((state) => state.user.users)
  // PROJECTS
  const reduxProjects = useSelector((state) => state.project.projects)
  const loggedIn = useSelector((state) => state.user.loggedIn)
  const [currentUser, setCurrentUser] = useState(reduxCurrentUser)

  // ERRORS 
  const [errorMain, setErrorMain] = useState([])


  return (
    <>
      <ThemeProvider theme={theme}>
        <Header setCurrentUser={setCurrentUser} setErrorMain={setErrorMain} currentUser={reduxCurrentUser}/>
        <div className="App" style={{}}>
          <Routes>
            <Route exact path='/' element={<Home currentUser={currentUser} setErrorMain={setErrorMain} />} />
            <Route path='/profile-main' element={<Profile currentUser={currentUser} />} />
            <Route path='/projects-main' element={<ProjectList />} />
            <Route path='/posts' element={<PostList />} />
            <Route path='/projects-all' element={<AllProjects />} />
            <Route path='/posts-all' element={<AllPosts currentUser={currentUser} />} />
            <Route path='/posts/:id' element={<PostItem currentUser={currentUser} />} />
            <Route path='/projects/:id' element={<ProjectItem currentUser={reduxCurrentUser} />} />
            <Route path='/create' element={<Create currentUser={currentUser} />} />
            <Route path='/login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} errorMain={errorMain} setErrorMain={setErrorMain} />} />
            <Route path='/categories/:type' element={<CategoryItem setErrorMain={setErrorMain} currentUser={reduxCurrentUser}/>} />
            <Route path='/userprofile/:username' element={<UserProfile />} />
          </Routes>
        </div>
      </ThemeProvider>

    </>
  );
}

export default App;
