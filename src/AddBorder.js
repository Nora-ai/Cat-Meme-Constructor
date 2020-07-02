import React, { Component } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


export default function AddBorder (props) {
    let [border, updateBorder] = useState("")
    const params = useParams()

    const handleClick = (e) => {
        e.preventDefault()
        updateBorder(e.target.value)
    }

    return (<>
     <button onClick={handleClick}>Add border</button>
    </>)
}
