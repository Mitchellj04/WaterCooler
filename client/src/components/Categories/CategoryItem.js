import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchCategoryType } from '../../features/category/CategorySlice'
import CategoryPost from './CategoryPost'
import CategoryProject from './CategoryProject'

const CategoryItem = () => {

  const [categoryItem, setCategoryItem] = useState([])
  const [categoryProject, setCategoryProject] = useState([])
  const [categoryPosts, setCategoryPosts] = useState([])
  const [categoryName, setCategoryName] = useState()
  const {type} = useParams()
  const dispatch = useDispatch()
  const categorys = useSelector((state) => state.category.categories)

  console.log(categorys)
  // console.log(type)
  useEffect(() => {
    console.log(type)
    dispatch(fetchCategoryType(type))
    // fetch(`/categories_filter/${type}`)
    // .then((resp) => resp.json())
    // .then((data) => {
    //   setCategoryItem(data[0])
    //   setCategoryProject(data[0].projects)
    //   setCategoryName(data[0].code)
    //   setCategoryPosts(data[0].posts)})
  },[type])

  console.log(type)
  console.log(categoryItem)
  console.log(categoryProject)

 
  const mapProjects = categoryProject.map((projects) => <CategoryProject key={projects.id} projects={projects} />)
  const mapPosts = categoryPosts.map((post) => <CategoryPost key={post.id} post={post}/>)

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