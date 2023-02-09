import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const ProjectItem = () => {

  const {id} = useParams()

  // useEffect(() => {
  //   fetch(`/project/${id}`)
  //   .then((resp) => console.log(resp))
  //   .then((project) => console.log(project))
  // })
  return (
    <div></div>
  )
}

export default ProjectItem
