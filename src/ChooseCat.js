import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import MakeMeme from './MakeMeme'


export default function ChooseCat () {
    let [cat, updateCat] = useState([])

    const apiCall = async (type) => {
        const data = await axios(`https://api.thecatapi.com/v1/images/search?mime_types=${type}&api_key=${process.env.REACT_APP_API_KEY_CAT}`)
        console.log(data.data[0].url)
        updateCat(data.data[0].url)
        }

    useEffect(() => {
        apiCall('gif')
    }, [])
  
    

    return (<>
            <div className="random-cat-box">
            <h2>Choose a Cat</h2> 
            <button onClick={()=>apiCall('gif')}>Random GIF</button>
            <button onClick={()=>apiCall('jpg,png')}>Random Image</button>
            <Link to="/">Actually, I am a Dog person</Link>
            <div className="cat-image"><img src={cat} alt="cat"></img></div> 
            <MakeMeme />
            </div>
            
        </>)
    
}

