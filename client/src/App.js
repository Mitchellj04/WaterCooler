import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Sidenav from './components/Sidenav'
import Home from './components/Home';
import ProjectList from './components/Projects/ProjectList';
import Login from './components/Login/Login';
import CreateProject from './components/Projects/CreateProject';
import ProjectItem from './components/Projects/ProjectItem';
import CategoryItem from './components/Categories/CategoryItem';
import AllProjects from './components/Projects/AllProjects';
import UserProfile from './components/Profile/UserProfile';
import PostList from './components/Posts/PostList';
import AllPosts from './components/Posts/AllPosts';
import Create from './components/Create';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from './features/projects/ProjectSlice';
import { fetchPosts } from './features/posts/PostSlice';
import { fetchCategory } from './features/category/CategorySlice';

function App() {   
  const [projects, setProjects] = useState([])
  const [posts, setPosts] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [errorMain, setErrorMain] = useState([])
  const [authenticate, setAuthenticate] = useState([])
  const [categories, setCategory] = useState([])
    
  // REDUX PRACTICE 
  const reduxProjects = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProjects())
    dispatch(fetchPosts())
    dispatch(fetchCategory())
  }, [])

  console.log(reduxProjects)
  // END PRACTICE 
  

  useEffect(() => {
    fetch('http://localhost:4000/user')
    .then((resp) => {
      if(resp.ok) {
      resp.json().then((user) => setCurrentUser(user))
      console.log(resp)}
      else{
        resp.json().then((error) => setAuthenticate(error))
      }
    })
  }, [])

  useEffect(() => {
    fetch("/projects")
    .then((resp) => resp.json())
    .then((data) => setProjects(data))
    
  }, [])

    useEffect(() => {
        fetch('/posts')
        .then((resp) => resp.json())
        .then((data) => setPosts(data))
    }, [])

    useEffect(() => {
      fetch("/categories")
      .then((resp) => resp.json())
      .then((data) => setCategory(data))
    }, [])  


  
    // console.log(errorMain)
    // console.log(authenticate)
    // console.log(projects) 
    // console.log(currentUser)
    // if (!currentUser) return <Home />;
  return (
    <>
      <Router>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} setErrorMain={setErrorMain}/>
        <div className="App" style={{backgroundColor:"#9f9f9f"}}>
        <Routes>
          <Route exact path='/' element={<Home categories={categories} projects={projects} setProjects={setProjects} currentUser={currentUser} setErrorMain={setErrorMain} posts={posts} setPosts={setPosts}/>}/>
          <Route path='/profile' element={<UserProfile setCurrentUser={setCurrentUser} currentUser={currentUser} /> } />
          <Route path='/projects' element={<ProjectList />} />
          <Route path='/posts' element={<PostList />} />
          <Route path='/projects-all' element={<AllProjects projects={projects} currentUser={currentUser}/>}/>
          <Route path='/posts-all' element={<AllPosts post={posts} currentUser={currentUser}/>}/>
          <Route path='/projects/:id' element={<ProjectItem />} />
          <Route path='/create' element={<Create currentUser={currentUser} setProjects={setProjects} setPosts={setPosts} projects={projects} categories={categories}/>}/>
          {/* <Route path='/project-create' element={<CreateProject setProjects={setProjects} projects={projects}/>} /> */}
          <Route path='/login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} errorMain={errorMain} setErrorMain={setErrorMain}/>}/>
          <Route path='/categories/:type' element={<CategoryItem />} />
        </Routes>
  
        </div>
      </Router>
   
    
    </>
  );
}

export default App;
