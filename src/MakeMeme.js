import React, { Component, useState } from 'react'
//import { useParams } from 'react-router-dom'
import AddCaption from './AddCaption'

export default function MakeMeme (props) {
    let [borderColor, updateBorder] = useState("")
    let [filter, updateFilter] = useState("")
    //let params = useParams()

    const animalMeme = props.history.location.pathname
    console.log(animalMeme.substring(10, animalMeme.length))
    const animalLink = animalMeme.substring(10, animalMeme.length)

    const handleClick = (color) => {
        updateBorder(color)
    }
    
    

    return (<>
    <h1 className="custom-header">Customization Station</h1>
         <div className="pic-select">
             <div className={borderColor}><img src={animalLink} alt="animalimage"></img></div>
         </div>
         <AddCaption />
         <button onClick={() => handleClick('pink')}>Add Pink Border</button>
         <button onClick={() => handleClick('blue')}>Add blue Border</button>
         <button onClick={() => handleClick('green')}>Add green Border</button>
    </>)
}   