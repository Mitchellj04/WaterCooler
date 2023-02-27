import React from 'react'
import { useSelector } from 'react-redux'
import ProjectList from './Projects/ProjectList'

const ProjectMain = ({projects, setErrorMain}) => {

    const projectRedux = useSelector((state) => state.project.projects)

    const homeProjects = projectRedux.map((project) => <ProjectList project={project} projects={projects} setErrorMain={setErrorMain} key={project.id}/>)
    

  return (
    <>
    
    <div>{homeProjects}</div>
    </>
  )
}

export default ProjectMain