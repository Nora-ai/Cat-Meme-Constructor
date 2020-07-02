import React, { Component } from 'react'
import { useState } from 'react'

export default function AddCaption(props) {
    let [caption, updateCaption] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
    }

    return (<>
        <div className="add-caption">
            <p>ADD A CAPTION</p>
            <input onChange={e => updateCaption(e.target.value)} type='text'placeholder="caption" value={caption}></input>
            <button onClick={handleClick}>ADD</button>
        </div>
   </>)

}
