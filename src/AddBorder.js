import React, { Component } from 'react'
import { useState } from 'react'


export default function AddBorder () {
    let [pinkBorder, updatePinkBorder] = useState("")


    const handleClick = (e) => {
        e.preventDefault()
        updatePinkBorder(e.target.value)
        
    }


    return (<>
    <button onClick={handleClick}>Add border</button>

    </>)
}

//border: '10px solid magenta'