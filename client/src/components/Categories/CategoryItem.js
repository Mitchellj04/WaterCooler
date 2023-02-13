import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CategoryProject from './CategoryProject'

const CategoryItem = () => {

  const [categoryItem, setCategoryItem] = useState([])
  const [categoryProject, setCategoryProject] = useState([])
  const [categoryPosts, setCategoryPosts] = useState([])
  const [categoryName, setCategoryName] = useState()
  const {type} = useParams()

  // console.log(type)
  useEffect(() => {
    fetch(`/categories_filter/${type}`)
    .then((resp) => resp.json())
    .then((data) => {
      setCategoryItem(data[0])
      setCategoryProject(data[0].projects)
      setCategoryName(data[0].code)})
  },[type])

  console.log(categoryItem.code)
  console.log(categoryProject)

  // const mapCategory = categoryItem.map((data) => console.log(data.projects))
  // console.log(categoryProject)
  const mapProjects = categoryProject.map((projects) => <CategoryProject projects={projects} />)
  return (
    <>
    <Grid container>

    

    <Grid item xs={12}> 
      <Typography variant='h2' style={{paddingTop:100}}>{categoryName}</Typography>
      <Box style={{padding: 25}}>
        
      </Box>
      </Grid>
      <Grid item xs={5}>
        <Box>
          <Typography variant="h4">Projects</Typography>
          {mapProjects}
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Box>
          <Typography variant='h4'>Posts</Typography>
        </Box>
      </Grid>
 
    
     </Grid>
     </>
  )
}

export default CategoryItem