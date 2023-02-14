import React from 'react'
import ProjectList from './Projects/ProjectList'

const Project = ({projects, currentUser, setErrorMain}) => {


    const homeProjects = projects.map((project) => <ProjectList project={project} currentUser={currentUser} setErrorMain={setErrorMain} key={project.id}/>)
    
  return (
    <>
    
    <div>{homeProjects}</div>
    </>
  )
}

export default Project