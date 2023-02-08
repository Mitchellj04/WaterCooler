import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import ProjectList from './components/Projects/ProjectList';

function App() {   
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    fetch("/projects")
    .then((resp) => resp.json())
    .then((data) => setProjects(data))
  }, [])

    console.log(projects)
  return (
    <>
  
 
    
      <Router>
        <Header />
        <div className="App">
        <Routes>
          <Route exact path='/' element={<Home projects={projects}/>}/>
          <Route path='/projects' element={<ProjectList />} />
        </Routes>
  
        </div>
      </Router>
   
    
    </>
  );
}

export default App;
