import { Box, Button, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../Redux/category/CategorySlice';
import CreateCategory from './CreateCategory';


const CategoryMain = ({ setErrorMain }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategory())
  }, [])

  // REACT STATE 
  const [hideNewCategory, setHideNewCategory] = useState(false)

  // OPEN CATEGORY CREATE
  const handleCategoryOpen = () => { setHideNewCategory(true) }

  // REDUX
  const currentUser = useSelector((state) => state.user.users)
  const categories = useSelector((state) => state.category.categories)

  // BUTTON CLICK HANDLER
  const handleClick = (e) => {
    e.preventDefault()
    if (currentUser === null) {
      setErrorMain('Please login first')
      navigate('/login')
    }
    else { navigate(`/categories/${e.target.value}`) }
  }

  // ALL CATEGORY BUTTONS
  const buttonMap = categories.map((category) => {
    return <Box style={{ paddingTop: 20 }} key={category.id}> <Button id={category.id} value={category.code} variant="contained" onClick={handleClick}>{category.code}</Button> </Box>
  })


  return (
    <><div style={{ height: 100 }}>
      <Grid>
        {buttonMap}
        <Button onClick={handleCategoryOpen}>+ Add New</Button>
        <CreateCategory setHideNewCategory={setHideNewCategory} hideNewCategory={hideNewCategory} />
      </Grid> </div>
    </>
  )
}

export default CategoryMain