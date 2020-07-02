import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import AddCaption from './AddCaption'
import AddBorder from './AddBorder'

export default function MakeMeme (props) {
    const params = useParams()

    const animalMeme = props.history.location.pathname
    console.log(animalMeme.substring(10, animalMeme.length))
    const animalLink = animalMeme.substring(10, animalMeme.length)

    return (<>
    <h1 className="custom-header">Customization Station</h1>
         <div className="pic-select"><img src={animalLink} alt="animalimage"></img></div>
         <AddCaption />
         <AddBorder />
    </>)
}   