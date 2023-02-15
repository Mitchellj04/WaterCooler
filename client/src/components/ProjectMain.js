import React from 'react'
import ProjectList from './Projects/ProjectList'

const ProjectMain = ({projects, setProjects, currentUser, setErrorMain}) => {


    const homeProjects = projects.map((project) => <ProjectList project={project} projects={projects} setProjects={setProjects} currentUser={currentUser} setErrorMain={setErrorMain} key={project.id}/>)
    
  return (
    <>
    
    <div>{homeProjects}</div>
    </>
  )
}

export default ProjectMain