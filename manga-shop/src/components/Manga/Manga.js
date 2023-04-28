import { Button } from '@mui/material';
import React from 'react'
import "./Manga.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// will handle all the props from the db 

const Manga = (props) => {
    const { _id, name, author, price, description, image } = props.manga;
   
    // function for delete handler
    const history = useNavigate()
    const deleteHandler = async () => {
      await axios.delete(`http://localhost:5000/manga/${_id}`).then( res => res.data).then(() => history("/mangas"));
    }   


  return <div className='details'>
    <img src={image} alt={name} />
    <article> By {author} </article>
    <h3>{name}</h3>
    <p>{description}</p>
    <h2>${price}</h2>
    <Button LinkComponent={Link} to={`/mangas/${_id}`}>Edit</Button>
    <Button onClick={deleteHandler}>Delete</Button>

    </div>
}

export default Manga