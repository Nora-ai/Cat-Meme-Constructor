import React from 'react'
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
            <form onSubmit={handleClick}> 
                <input 
                    type='text'
                    placeholder="type caption" 
                    value={input}
                    onChange={e => updateInput(e.target.value)}
                    />
                <button className="add-button">add</button>
            </form>
            <p className="caption">{caption}</p>
        </div>
   </>)

}
