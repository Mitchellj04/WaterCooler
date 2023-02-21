import React from 'react'
import { useSelector } from 'react-redux'
import ProjectList from './Projects/ProjectList'

const ProjectMain = ({projects, setProjects, currentUser, setErrorMain}) => {

    const projectRedux = useSelector((state) => state.project.projects)
    console.log(projectRedux)
    console.log(projects)
    const homeProjects = projectRedux.map((project) => <ProjectList project={project} projects={projects} setProjects={setProjects} currentUser={currentUser} setErrorMain={setErrorMain} key={project.id}/>)
    
  return (
    <>
    
    <div>{homeProjects}</div>
    </>
  )
}

export default ProjectMain