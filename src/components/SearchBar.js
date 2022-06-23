import React , {useState} from 'react'
import {Paper, TextField} from "@mui/material"
const SearchBar = ({onFormSubmit}) => {
    
 const handleChange = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
        setSearchTerm(e.target.value)
      
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
   console.log("from search " + searchTerm)
      onFormSubmit(searchTerm)
  }

    const [searchTerm,setSearchTerm] = useState("")  
  return (
   <Paper elevation={6} style={{padding:"25px"}}>
    <form onSubmit={handleSubmit}>
        <TextField fullWidth label="search..."  onChange={handleChange}></TextField>
    </form>
   </Paper>
  )
}

export default SearchBar