import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function ChoosePicture () {
    let [cat, updateCat] = useState([])

    const apiCall = async () => {
        const data = await axios(`https://api.thecatapi.com/v1/images/search?api_key=${process.env.REACT_APP_API_KEY}`)
        console.log(data.data[0].url)
        updateCat(data.data[0].url)
        }

    useEffect(() => {
        apiCall()
    }, [])
  
    

    return (<>
            <p>hi</p>
            <button onClick={apiCall}>Get Random Cat</button>
            <img src={cat} alt="cat"></img>
        </>)
    
}

