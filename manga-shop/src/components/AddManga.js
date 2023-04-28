import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, TextField, FormLabel }  from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";


// export default function AddManga()
// set inputs for adding manga along with values for the database

const AddManga = () => {
  const history = useNavigate();
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
      [e.target.name]: e.target.value,
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
    sendRequest().then(() => history("/books"));

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
  
  <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="author"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="description"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="filled"
          name="price"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="image"
        />
      <Button type='submit'>Add more manga!</Button>
    </Box>




  </form>
  )
    
};
export default AddManga