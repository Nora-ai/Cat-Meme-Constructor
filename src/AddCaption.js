import React, { Component } from 'react'
import { useState } from 'react'

export default function AddCaption(props) {
    let [caption, updateCaption] = useState("")
    let [input, updateInput] = useState("")
    //let [captionSubmitted, handleClick] = useState("")

    let handleClick = (e) => {
        e.preventDefault()
        updateInput(caption)
        updateCaption("")
        //captionSubmitted = caption
        //console.log(captionSubmitted)
    }

//    const completeCaption = captionSubmitted.length > 0 ? <p>{captionSubmitted}</p> : "" 

    return (<>
        <div className="add-caption">
            <p>ADD A CAPTION</p>
            <form onSubmit={handleClick}> 
                <input 
                    type='text'
                    placeholder="caption" 
                    value={caption}
                    onChange={e => updateCaption(e.target.value)}
                    />
                <button>ADD</button>
            </form>
            <p>{input}</p>
        </div>
   </>)

}
