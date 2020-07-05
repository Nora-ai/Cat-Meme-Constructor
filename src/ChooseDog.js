import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import MakeMeme from './MakeMeme'
import Footer from './Footer'



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
                    <Link to='/'><div className='choose-a-dog'><img src={`https://res.cloudinary.com/alienora/image/upload/v1593808232/rsz_dog_small_vwgeff.png`} alt="dog-silhouette"></img></div></Link>
                
                <div className="random-buttons">
                    <button onClick={()=>apiCall('jpg,png')}>Random Image</button>
                    <button onClick={()=>apiCall('gif')}>Random GIF</button>
                </div>
                <br/>

                <div className="dog-image">
                    <img src={dog} alt="dog"></img>
                </div>

                <br/>
                <div className="make-meme-button">
                <Link to={`/makememe/${dog}`}><button>Let's make a Meme!</button></Link>
                </div>

                <br/>
                <Link to="/choosecat" style={{textDecoration: 'none', color: 'black'}}>Actually, I am a CAT person</Link>
                <div className="space-needed"></div>
                <Footer />
            </div>
        </>)
    
}

