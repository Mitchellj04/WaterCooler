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

function App() {   
  const [projects, setProjects] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [errorMain, setErrorMain] = useState('')
  
  useEffect(() => {
    fetch("/projects")
    .then((resp) => resp.json())
    .then((data) => setProjects(data))
    
  }, [])

  useEffect(() => {
    fetch('/me')
    .then((resp) => {
      if(resp.ok) {
        resp.json().then((user) => setCurrentUser(user))
      }
      else{
        console.log(resp)
      }
    })
  }, [])

  

    console.log(errorMain)
    console.log(projects)
    console.log(currentUser)
  return (
    <>
  
 
    
      <Router>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <div className="App">
        <Routes>
          <Route exact path='/' element={<Home projects={projects} />}/>
          <Route path='/projects' element={<ProjectList currentUser={currentUser} setErrorMain={setErrorMain}/>} />
          <Route path='/projects/:id' element={<ProjectItem />} />
          <Route path='/project-create' element={<CreateProject setProjects={setProjects} projects={projects}/>} />
          <Route path='/login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        </Routes>
  
        </div>
      </Router>
   
    
    </>
  );
}

export default App;
