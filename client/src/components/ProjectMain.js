import React from 'react'
import ProjectList from './Projects/ProjectList'

const Project = ({projects}) => {


    const allProjects = projects.map((project) => <ProjectList project={project} />)
  return (
    <>
    
    <div>{allProjects}</div>
    </>
  )
}

export default Project