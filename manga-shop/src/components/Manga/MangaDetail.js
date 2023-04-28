import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MangaDetail() {
    //get url id from db, function below passes to id in app.js route path
    const id = useParams().id;
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/manga/${id}`)
            .then( res => console.log(res.data))
        }
     }, [])
  return (
    <div></div>
  )
}

export default MangaDetail