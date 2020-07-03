import React, { Component } from 'react'
import { useState } from 'react'

export default function AddCaption(props) {
    let [input, updateInput] = useState("")
    let [caption, updateCaption] = useState("")

    let handleClick = (e) => {
        e.preventDefault()
        updateCaption(input)
        updateInput("")
    }

    return (<>
        <div className="add-caption">
            <p>ADD A CAPTION</p>
            <form onSubmit={handleClick}> 
                <input 
                    type='text'
                    placeholder="caption" 
                    value={input}
                    onChange={e => updateInput(e.target.value)}
                    />
                <button>ADD</button>
            </form>
            <p className="caption">{caption}</p>
        </div>
   </>)

}
