import React, { Component, useState } from 'react'
import { Link } from 'react'
import AddCaption from './AddCaption'

export default function MakeMeme (props) {
    let [borderColor, updateBorder] = useState("")
    let [filter, updateFilter] = useState("")

    const animalMeme = props.history.location.pathname
    console.log(animalMeme.substring(10, animalMeme.length))
    const animalLink = animalMeme.substring(10, animalMeme.length)

    const handleClick = (color) => {
        updateBorder(color)
    }

    const handleClickTwo= (filter) => {
        updateFilter(filter)
    }


    return (<>
    <h1 className="custom-header">Customization Station</h1>
        {/* <Link to="/choosecat">No, wait start over</Link> */}
         <div className="pic-select">
             <div className={`${borderColor} ${filter}`}><img src={animalLink} alt="animalimage"></img></div>
         </div>
         <AddCaption />
    <div className="border-buttons">
         <button onClick={() => handleClick('pink')}>Add Pink Border</button>
         <button onClick={() => handleClick('blue')}>Add blue Border</button>
         <button onClick={() => handleClick('green')}>Add green Border</button>
    </div>
        <br/>
    <div className="filter-buttons">
         <button onClick={() => handleClickTwo('greyscale')}>Grey filter</button>
         <button onClick={() => handleClickTwo('invert')}>scary</button>
         <button onClick={() => handleClickTwo('sepia')}>sepia</button>
         <button onClick={() => handleClickTwo('contrast')}>contrast</button>
         <button onClick={() => handleClickTwo('blur')}>blur</button>
    </div>
        <br/>
    <div className="reset-button">
         <button onClick={() => handleClickTwo('reset')}>reset</button>
     </div>
    </>)
}   