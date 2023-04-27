import React, { useEffect, useState } from 'react'
import axios from 'axios';
// Make http requests from node.js, supports the promise API, and Intercept/transform request and response
const URL = "http://localhost:5000/mangas";


const fetchHandler = async() => {
   return await axios.get(URL).then((res) => res.data)
}
const Mangas = () => {
    const [mangas, setMangas] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setMangas(data.mangas))

    }, []);
    console.log(mangas)
  return (
    <div>All the mangas!</div>
  )
}

export default Mangas