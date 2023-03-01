import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { fetchProjects } from './features/projects/ProjectSlice';
import { fetchPosts } from './features/posts/PostSlice';
import { fetchCategory } from './features/category/CategorySlice';
import { fetchUser } from './features/users/UserSlice';
import UserProfile from './components/Profile/UserProfile';


function App() {
  // REDUX
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
    // dispatch(fetchProjects())
    // dispatch(fetchPosts())
    // dispatch(fetchCategory())
  }, [])

 const reduxCurrentUser = useSelector((state) => state.user.users)
  const reduxProjects = useSelector((state) => state.project.projects)
  const [currentUser, setCurrentUser] = useState(reduxCurrentUser)
  

  const [errorMain, setErrorMain] = useState([])
  const [authenticate, setAuthenticate] = useState([])
  const [categories, setCategory] = useState([])

  
 

  console.log(reduxCurrentUser)



  return (
    <>
      <Router>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} setErrorMain={setErrorMain} />
        <div className="App" style={{ backgroundColor: "#9f9f9f" }}>
          <Routes>
            <Route exact path='/' element={<Home currentUser={currentUser} setErrorMain={setErrorMain} />} />
            <Route path='/profile' element={<Profile currentUser={currentUser}/>} />
            <Route path='/projects' element={<ProjectList />} />
            <Route path='/posts' element={<PostList />} />
            <Route path='/projects-all' element={<AllProjects />} />
            <Route path='/posts-all' element={<AllPosts currentUser={currentUser} />} />
            <Route path='/projects/:id' element={<ProjectItem currentUser={reduxCurrentUser}/>} />
            <Route path='/create' element={<Create currentUser={currentUser} categories={categories} />} />
            <Route path='/login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} errorMain={errorMain} setErrorMain={setErrorMain} />} />
            <Route path='/categories/:type' element={<CategoryItem />} />
            <Route path='/profile/:username' element={<UserProfile />} />
          </Routes>

        </div>
      </Router>


    </>
  );
}

export default App;
