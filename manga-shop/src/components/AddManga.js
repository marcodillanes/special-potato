import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, TextField, Typography }  from '@mui/material';
import axios from "axios";


// export default function AddManga()
// set inputs for adding manga along with values for the database

const AddManga = () => {
  const [inputs, setInputs] = useState({
    name:'',
    author:'',
    description:'',
    price:'',
    image:''

  });

  //define handleChange for inputs on textfields

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  // create a function to send request to mongodb

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
      })
      .then((res) => res.data);
  };





  // define handlesubmit for the form

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  //form submission for entry of a new manga  

  return ( 
  <form onSubmit = {handleSubmit}>
     <Box display="flex" 
          flexDirection="column"
          justifyContent="center"
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '60ch' },
        }}
      noValidate
      autoComplete="off"
    >
  
      <TextField  id="filled-basic" label="Name" variant="filled" />
      <TextField value={inputs.author} onChange={handleChange} id="filled-basic" label="Author" variant="filled" />
      <TextField value={inputs.description} onChange={handleChange} id="filled-basic" label="Description" variant="filled" />
      <TextField value={inputs.price} onChange={handleChange} id="filled-basic" label="Price" variant="filled" />
      <TextField value={inputs.image} onChange={handleChange} id="filled-basic" label="Image" variant="filled" />
      <Button type='submit'>Add more manga!</Button>
    </Box>




  </form>
  )
    
};
export default AddManga