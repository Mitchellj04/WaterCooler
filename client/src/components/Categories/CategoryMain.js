import { Box, Button, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


const CategoryMain = () => {

  const [categories, setCategory] = useState([])
  const [selected, setSelected] = useState('')
  const navigate = useNavigate()



  useEffect(() => {
    fetch("/categories")
    .then((resp) => resp.json())
    .then((data) => setCategory(data))
  }, [])  
  
  
  const handleClick = (e) => {
    e.preventDefault()
    setSelected(e.target.value)
    navigate(`/categories/${e.target.value}`)
  }

  const buttonMap = categories.map((category) => {
    return <Box style={{paddingTop:20}}>
    
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