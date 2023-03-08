import React from 'react'
import { useState, useEffect } from "react";
import ProjectList from './ProjectList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from '../../Redux/projects/ProjectSlice';

const ProjectMain = ({projects, setErrorMain}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

    const projectRedux = useSelector((state) => state.project.projects)
    console.log(projectRedux)

    const homeProjects = projectRedux.map((project) => <ProjectList project={project} projects={projects} setErrorMain={setErrorMain} key={project.id}/>)
    

  return (
    <>
    
    <div>{homeProjects}</div>
    </>
  )
}

export default ProjectMain