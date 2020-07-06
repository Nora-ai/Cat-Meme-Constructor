import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'


export default function ChooseCat () {
    let [cat, updateCat] = useState([])

    const apiCall = async (type) => {
        const data = await axios(`https://api.thecatapi.com/v1/images/search?mime_types=${type}&api_key=${process.env.REACT_APP_API_KEY_CAT}`)
        updateCat(data.data[0].url)
        }

    useEffect(() => {
        apiCall('gif')
    }, [])
  

    return (<>
            <div className="random-cat-box">
                    <Link to='/'><div className='choose-a-cat'><img src={`https://res.cloudinary.com/alienora/image/upload/v1594000889/56884483-vector-black-silhouette-of-a-walking-cat-white_h74bsz.png`} alt="cat-silhouette"></img></div></Link>
                <br/>
               
                <div className="random-buttons">
                    <button onClick={()=>apiCall('gif')}>Random GIF</button>
                    <button onClick={()=>apiCall('jpg,png')}>Random Image</button>
                </div>

                <br/>

                <div className="cat-image">
                    <img src={cat} alt="cat"></img>
                </div> 

                <br/>
                <div className="make-meme-button">
                    <Link to={`/makememe/${cat}`}><button>Let's make a Meme!</button></Link>
                    </div>

                <br/>
                <Link to="/choosedog" style={{textDecoration: 'none', color: 'white'}}>Actually, I am a DOG person</Link>
                   
                <div className="space-needed"></div>
                <Footer />
            </div>
    
        </>)
    
}

