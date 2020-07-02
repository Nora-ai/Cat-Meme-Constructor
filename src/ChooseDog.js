import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import MakeMeme from './MakeMeme'



export default function ChooseDog () {
    let [dog, updateDog] = useState([])

    const apiCall = async (type) => {
        const data = await axios(`https://api.thedogapi.com/v1/images/search?mime_types=${type}&api_key=${process.env.REACT_APP_API_KEY_DOG}`)
        console.log(data.data[0].url)
        updateDog(data.data[0].url)
        }

    useEffect(() => {
        apiCall('gif')
    }, [])
  
    

    return (<>
            <div className="random-dog-box">
            <h2>Choose a Dog</h2>
            <button onClick={()=>apiCall('jpg,png')}>Random Image</button>
            <button onClick={()=>apiCall('gif')}>Random GIF</button>
            <Link to="/">Actually, I am a cat person</Link>
            <div className="dog-image"><img src={dog} alt="dog"></img></div>
            <Link to={`/makememe/${dog}`}><button>Let's make a Meme!</button></Link>
            </div>
        </>)
    
}

