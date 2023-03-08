import { Box, Button, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../Redux/category/CategorySlice';
import CreateCategory from './CreateCategory';


const CategoryMain = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategory())
  }, [])

  const [selected, setSelected] = useState('')
  const [hideNewCategory, setHideNewCategory] = useState(false)
  const handleCategoryOpen = () => { setHideNewCategory(true) }
  const categories = useSelector((state) => state.category.categories)
  const navigate = useNavigate()




  
  const handleClick = (e) => {
    e.preventDefault()
    setSelected(e.target.value)
    navigate(`/categories/${e.target.value}`)
  }

  const buttonMap = categories.map((category) => {
    return <Box style={{paddingTop:20}} key={category.id}>
        <Button id={category.id} value={category.code} variant="contained" onClick={handleClick}>{category.code}</Button>
    </Box>
  })


  
   return (
    <><div style={{height:100}}>
    <Grid>
      
      {buttonMap}
      <Button onClick={handleCategoryOpen}>+ Add New</Button>
      <CreateCategory setHideNewCategory={setHideNewCategory} hideNewCategory={hideNewCategory}/>
    </Grid> </div> 
    </>
  )
}

export default CategoryMain