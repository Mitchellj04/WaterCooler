import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchCategoryType } from '../../Redux/category/CategorySlice'
import CategoryPost from './CategoryPost'
import CategoryProject from './CategoryProject'

const CategoryItem = () => {

  const dispatch = useDispatch()
  const { type } = useParams()


  // FETCH CATEGORIES
  useEffect(() => {
    dispatch(fetchCategoryType(type))
  }, [])

  // REACT STATE 
  const [selectAll, setSelectAll] = useState(true)
  const [selectProject, setSelectProject] = useState(false)
  const [selectPost, setSelectPost] = useState(false)

  console.log(selectAll, "All")
  console.log(selectProject, "Project")
  console.log(selectPost, "Post")

  // REDUX
  const categories = useSelector((state) => state.category.categories)

  // STYLE
  const boxStyle = {
    margin: 20
  }

  // SHOW ALL 
  const categoryAll = categories.map((cat) => {
    return <><Grid item xs={12}>
      <Typography variant='h2'>{cat.code}</Typography>
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

  // SHOW ONLY PROJECTS
  const categoryProject = categories.map((cat) => {
    return <><Grid item xs={12}>
      <Typography variant='h2' style={{ paddingTop: 25 }}>{cat.code}</Typography>
      <Box style={{ padding: 25 }}>
      </Box>
    </Grid>
      <Grid item xs={12}>
        <Box style={boxStyle}>
          <Typography variant="h4">Projects</Typography>

        </Box>
      </Grid>
      {cat.projects.map((projects) => <CategoryProject key={projects.id} projects={projects} />)}
    </>
  })

  // SHOW ONLY POSTS
  const categoryPost = categories.map((cat) => {
    return <><Grid item xs={12}>
      <Typography variant='h2' style={{ paddingTop: 25 }}>{cat.code}</Typography>
      <Box style={{ padding: 25 }}>
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

  function switchView() {
    if (selectAll === true) {
      return <Grid container>
        {categoryAll}
      </Grid>
    }
    else if (selectProject === true) {
      return <Grid container>
        {categoryProject}
      </Grid>
    }
    else if (selectPost === true) {
      return <Grid>
        {categoryPost}
      </Grid>
    }
  }


  return (
    <>
      <div style={{ paddingTop: 100 }}>
        <Button onClick={() => { setSelectAll(true); setSelectProject(false); setSelectPost(false) }}>All</Button>
        <Button onClick={() => { setSelectProject(true); setSelectAll(false); setSelectPost(false) }}>Projects</Button>
        <Button onClick={() => { setSelectPost(true); setSelectProject(false); setSelectAll(false); }}>Posts</Button>
      </div>
      <div>
        {switchView()}
      </div>

    </>
  )
}

export default CategoryItem