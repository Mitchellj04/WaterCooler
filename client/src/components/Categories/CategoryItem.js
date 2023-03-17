import { Alert, Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { fetchCategory, fetchCategoryType } from '../../Redux/category/CategorySlice'
import CategoryPost from './CategoryPost'
import CategoryProject from './CategoryProject'

const CategoryItem = ({setErrorMain, currentUser}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { type } = useParams()


  // FETCH CATEGORIES
  useEffect(() => {
    if(type === "ALL"){
      dispatch(fetchCategory())
    }
    else{
      dispatch(fetchCategoryType(type))
    }  
  }, [type])

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

  const handleReset = (e) => {
    setSelectAll(true); setSelectProject(false); setSelectPost(false);
    navigate(`/categories/ALL`)
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (currentUser === null) {
      setErrorMain(['Please login first'])
      navigate('/login')
    }
    else { navigate(`/categories/${e.target.value}`) }
  }

  const buttonMap = categories.map((category) => {
    return <Grid item xs={2}><Box style={{ paddingTop: 20 }} key={category.id}> <Button id={category.id} value={category.code} variant="contained" onClick={handleClick}>{category.code}</Button> </Box></Grid>
  })

  function buttonHandler() {
    if(type === "ALL"){
      return <><Grid container>
      {buttonMap}</Grid>
      <Button onClick={() => { setSelectAll(true); setSelectProject(false); setSelectPost(false) }}>All</Button>
      <Button onClick={() => { setSelectProject(true); setSelectAll(false); setSelectPost(false) }}>Projects</Button>
      <Button onClick={() => { setSelectPost(true); setSelectProject(false); setSelectAll(false); }}>Posts</Button>
      </>
    }
    else {
      return <>
      <Button onClick={() => { setSelectAll(true); setSelectProject(false); setSelectPost(false) }}>All</Button>
      <Button onClick={() => { setSelectProject(true); setSelectAll(false); setSelectPost(false) }}>Projects</Button>
      <Button onClick={() => { setSelectPost(true); setSelectProject(false); setSelectAll(false); }}>Posts</Button>
      <Button onClick={handleReset}>Reset</Button>
      </>
    }
  }

  function emptyProject(project){
    if (project.length > 0){
      return <>{project.map((projects) => <CategoryProject key={projects.id} projects={projects} />)}</>
    }
    else {
      return <Alert severity='info'>Currently No Projects</Alert>
    }
  }

  function emptyPosts(post){
    if(post.length > 0){
      return <>{post.map((post) => <CategoryPost key={post.id} post={post} />)}</>
    }
    else {
      return <Alert severity='info'>Currently No Posts</Alert>
    }
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
          {emptyProject(cat.projects)}
          {/* {cat.projects.map((projects) => <CategoryProject key={projects.id} projects={projects} />)} */}
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box style={boxStyle}>
          <Typography variant='h4'>Posts</Typography>
          {emptyPosts(cat.posts)}
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
      {emptyProject(cat.projects)}
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
          {emptyPosts(cat.posts)}
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
        {buttonHandler()}
      </div>
      <div>
        {switchView()}
      </div>

    </>
  )
}

export default CategoryItem