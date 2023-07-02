import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {

    const handleClick =()=>{
        
        let upperText = text.toUpperCase();
        setText(upperText);
    }
    const handleonChange =(ev)=>{
        setText(ev.target.value)
        console.log("handleonChange !")
    }
    const [text, setText] = useState("Enter Text here")
    // text = "Update Text here" // Wrong way to change the state
    // setText("Update Text here") // Correct  way to change the state
    return (
        <div>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleonChange} id="myText" rows="6"></textarea>
            </div>
            <button className="btn btn-secondary" onClick={handleClick}>Convert to Upper Case</button>

        </div>
    )
}
