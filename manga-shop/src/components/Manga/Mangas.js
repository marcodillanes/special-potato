import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Manga from './Manga';
// Make http requests from node.js, supports the promise API, and Intercept/transform request and response
const URL = "http://localhost:5000/mangas";


const fetchHandler = async() => {
   return await axios.get(URL).then((res) => res.data)
}
const Mangas = () => {
    const [mangas, setMangas] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setMangas(data.mangas))

    }, []); //empty array here keeps it from callin the db limitlessly haha
    console.log(mangas)
  return (
    <div>
        <ul>
            {mangas && mangas.map((manga, i) =>(
                <div key={i}>
                    <Manga manga={manga}/>
                </div>
            ))}
        </ul>
        </div>
  )
}

export default Mangas