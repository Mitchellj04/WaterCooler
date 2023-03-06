import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchCategoryType } from '../../features/category/CategorySlice'
import CategoryPost from './CategoryPost'
import CategoryProject from './CategoryProject'

const CategoryItem = () => {
  
  const dispatch = useDispatch()
  const { type } = useParams()

  useEffect(() => {
    console.log(type)
    dispatch(fetchCategoryType(type))

  }, [])

  
  const categories = useSelector((state) => state.category.categories)


  const boxStyle = {
    margin: 20
  }


    const categoryMap = categories.map((cat) => {
      return <><Grid item xs={12}>
        <Typography variant='h2' style={{ paddingTop: 100 }}>{cat.code}</Typography>
        <Box style={{ padding: 25 }}>
        </Box>
      </Grid>
        <Grid item xs={6}>
          <Box style={boxStyle}>
            <Typography variant="h4">Projects</Typography>
            {cat.projects.map((projects) => <CategoryProject key={projects.id} projects={projects} />)}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box style={boxStyle}>
            <Typography variant='h4'>Posts</Typography>
            {cat.posts.map((post) => <CategoryPost key={post.id} post={post} />)}
          </Box>
        </Grid>
      </>
    })


  return (
    <>
      <Grid container>
        {categoryMap}
      </Grid>
    </>
  )
}

export default CategoryItem