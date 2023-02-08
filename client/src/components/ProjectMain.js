import React from 'react'
import ProjectItem from './ProjectItem'

const Project = ({projects}) => {


    const allProjects = projects.map((project) => <ProjectItem project={project} />)
  return (
    <>
    
    <div>{allProjects}</div>
    </>
  )
}

export default Project