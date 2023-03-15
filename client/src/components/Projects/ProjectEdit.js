import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { updateProject } from '../../Redux/projects/ProjectSlice'

const ProjectEdit = ({ project, hideEditProject, setHideEditProject }) => {

  const [projectEdit, setProjectEdit] = useState(project)
  const handleProjectClose = () => { setHideEditProject(false) }
  const handleChange = (e) => { setProjectEdit({ ...projectEdit, [e.target.name]: e.target.value }) }
  const dispatch = useDispatch()


  const fieldStyle = {
    margin: '5px auto'
  }

  const newProject = {
    title: projectEdit.title,
    description: projectEdit.description,
    github_link: projectEdit.github_link
  }

  const handleProjectEdit = (e) => {
    e.preventDefault()
    let id = project.id
    dispatch(updateProject({ id, newProject }))
    setHideEditProject(false)
  }

  return (
    <>
      <Dialog
        open={hideEditProject}
        keepMounted
        onClose={handleProjectClose}
        maxWidth="lg">
        <DialogTitle>Edit Project</DialogTitle>
        <form onSubmit={handleProjectEdit}>
          <DialogContent>
            <TextField
              fullWidth
              label="title"
              name="title"
              style={fieldStyle}
              value={projectEdit.title}
              onChange={handleChange} />
            <TextField
              fullWidth
              label="description"
              name="description"
              style={fieldStyle}
              value={projectEdit.description}
              onChange={handleChange} />
            <TextField
              fullWidth
              label="github_link"
              name="gitHub_link"
              style={fieldStyle}
              value={projectEdit.github_link}
              onChange={handleChange} />
            <TextField
              fullWidth
              label="category"
              name="category"
              style={fieldStyle}
              value={projectEdit.title}
              onChange={handleChange} />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Submit</Button>
            <Button onClick={handleProjectClose}>Close</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default ProjectEdit