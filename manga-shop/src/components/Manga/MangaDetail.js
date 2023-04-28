import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, FormLabel }  from '@mui/material';

function MangaDetail() {
    const [inputs, setInputs] =useState();
    
    //get url id from db, function below passes to id in app.js route path
    const id = useParams().id;
    const history = useNavigate();
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/manga/${id}`)
            .then( res => console.log(res.data))
            .then((res) => res.data)
            .then((data) => setInputs(data.manga));
        };
        fetchHandler ();
     }, [id]);

     // pretty much copied form and event handlers from addmanga.js

     const sendRequest = async () => {
        await axios
          .put(`http://localhost:5000/books/${id}`, {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
          })
          .then((res) => res.data);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/mangas"));
      };
      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
  return (
    <div>
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
      <Button type='submit'>Update manga details!</Button>
    </Box>




  </form>
    </div>
  )
}

export default MangaDetail