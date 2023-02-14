import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CategoryPost from './CategoryPost'
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
      setCategoryName(data[0].code)
      setCategoryPosts(data[0].posts)})
  },[type])

  console.log(categoryItem)
  console.log(categoryProject)

 
  const mapProjects = categoryProject.map((projects) => <CategoryProject projects={projects} />)
  const mapPosts = categoryPosts.map((post) => <CategoryPost post={post}/>)

  const boxStyle ={
    margin: 20
  }

  return (
    <>
    <Grid container>

    

    <Grid item xs={12}> 
      <Typography variant='h2' style={{paddingTop:100}}>{categoryName}</Typography>
      <Box style={{padding: 25}}>
        
      </Box>
      </Grid>
      <Grid item xs={6}>
        <Box style={boxStyle}>
          <Typography variant="h4">Projects</Typography>
          {mapProjects}
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box style={boxStyle}>
          <Typography variant='h4'>Posts</Typography>
          {mapPosts}
        </Box>
      </Grid>
 
    
     </Grid>
     </>
  )
}

export default CategoryItem