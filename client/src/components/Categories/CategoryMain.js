import { Box, Button, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../features/category/CategorySlice';


const CategoryMain = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategory())
  }, [])

  const [selected, setSelected] = useState('')
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
    <>
    <Grid>   
      {buttonMap}
    </Grid> 
    </>
  )
}

export default CategoryMain