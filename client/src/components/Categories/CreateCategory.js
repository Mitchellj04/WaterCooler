import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory } from '../../Redux/category/CategorySlice'

const CreateCategory = ({ setHideNewCategory, hideNewCategory }) => {

    const dispatch = useDispatch()
    const [language, setLanguage] = useState('')

    const handleCategoryClose = () => { setHideNewCategory(false) }
    const error = useSelector((state) => state.category.errors)


    const code = {
        code: language
    }

    const handleNewCategory = (e) => {
        e.preventDefault()
        dispatch(createCategory(code))
    }

    return (
        <>
            <Dialog
                open={hideNewCategory}
                keepMounted
                onClose={handleCategoryClose}
                maxWidth="xl">
                <DialogTitle>New Category</DialogTitle>
                <form onSubmit={handleNewCategory}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            fullWidth
                            variant="standard"
                            label="Category"
                            name="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)} />
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit">Submit</Button>
                        <Button onClick={handleCategoryClose}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default CreateCategory