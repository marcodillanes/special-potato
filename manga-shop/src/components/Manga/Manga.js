import { Button } from '@mui/material';
import React from 'react'

// will handle all the props from the db 
const Manga = (props) => {
    const { _id, name, author, price, description, image } = props.manga;
  return <div>
    <img src={image} alt={name} />
    <article> By {author} </article>
    <h3>{name}</h3>
    <p>{description}</p>
    <h2>$ {price}</h2>
    <Button>Update</Button>
    <Button>Delete</Button>

    </div>
}

export default Manga