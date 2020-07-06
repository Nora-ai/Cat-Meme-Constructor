import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddCaption from './AddCaption'
import Footer from './Footer'

export default function MakeMeme (props) {
    let [borderColor, updateBorder] = useState("")
    let [filter, updateFilter] = useState("")
    let [style, updateStyle] = useState("")

    const animalMeme = props.history.location.pathname
    console.log(animalMeme.substring(10, animalMeme.length))
    const animalLink = animalMeme.substring(10, animalMeme.length)

    const handleClickColor = (color) => {
        updateBorder(color)
    }

    const handleClickFilter = (filter) => {
        updateFilter(filter)
    }

    const handleClickStyle = (style) => {
        updateStyle(style)
    }

    const handleClickReset = () => {
        updateFilter("")
        updateStyle("")
        updateBorder("")
    }

    return (<>
    <div className="meme-ix-two">
        <h2><Link to='/' style={{textDecoration: 'none', color: 'black'}}><span className="ix-flash">MEME-IX</span></Link></h2>
    </div>

    <div className="media">
         <div className={`pic-select ${borderColor} ${style}`}>
             <div className= {`${filter}`}><img src={animalLink} alt="animalimage"></img></div>
         </div>
    </div>
         <AddCaption />

    <p className="button-title">Border Style</p>
    <div className="style-buttons">
        <button onClick={() => handleClickStyle('solid')}>Solid</button>
        <button onClick={() => handleClickStyle('dotted')}>Dotted</button>
        <button onClick={() => handleClickStyle('dashed')}>Dashed</button>
        <button onClick={() => handleClickStyle('double')}>Double</button>
    </div>
        <br/>
    <p className="button-title">Border Color</p>
    <div className="border-buttons">
         <button onClick={() => handleClickColor('rainbow')}>Rainbow</button>
         <button onClick={() => handleClickColor('iridescent')}>Iridescent</button>
         <button onClick={() => handleClickColor('green')}>Green</button>
         <button onClick={() => handleClickColor('white')}>White</button>
    </div>
        <br/>
    <p className="button-title">Filter</p>
    <div className="filter-buttons">
         <button onClick={() => handleClickFilter('greyscale')}>Grey</button>
         <button onClick={() => handleClickFilter('invert')}>Scary</button>
         <button onClick={() => handleClickFilter('sepia')}>Sepia</button>
         <button onClick={() => handleClickFilter('blur')}>Blur</button>
    </div>
        <br/>

    <div className="reset-button">
            <button onClick={() => handleClickReset()}>reset</button>
    </div>

   
     
    <div className="space-needed"></div>   
     <Footer />
    </>)
}   