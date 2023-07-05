import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {

    const handleClick =()=>{
        
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handlelowClick =()=>{
        
        let lowertext = text.toLowerCase();
        setText(lowertext);
    }

    const handlegreetClick =()=>{

        let text = "Thanks for Writing and Reading !";
        setText(text);
    }
    const handleonChange =(ev)=>{
        setText(ev.target.value)
        // console.log("handleonChange !")
    }
    const [text, setText] = useState("")
    // text = "Update Text here" // Wrong way to change the state
    // setText("Update Text here") // Correct  way to change the state
    return (
        <>
        <div className = 'container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleonChange} style={{color: props.mode==='dark'?'white':'black'}} id="myText" rows="6"></textarea>
            </div>                                                                                                                                                      
            <button className="btn btn-secondary mx-2" onClick={handleClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lower Case</button>
            <button className="btn btn-success mx-2" onClick={handlegreetClick}>Click for Greet</button>
        </div>

        <div className="container mt-5" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>New Text Summary Here</h1>
        <h5>{text.split(" ").filter((item)=>{return item.length!=0}).length} words and {text.length} characters</h5>
        <p>Words can read in {0.008 * text.split(" ").length} Minutes</p> 
        <h3>Preview:- </h3>
        <p>{text.length>0?text:'Write Something above to Preview here'}</p>  
        </div>
        
        </>
    )
}
