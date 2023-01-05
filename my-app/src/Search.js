import React from 'react'
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';
import './Search.css'

export default function Search(props) {
    const [call,setCall] = useState(false) 

    const handleKeyDown = function(event){
        if(event.key=='Enter'){
            console.log("Hello");
        }
    }

    const handleButtonClick = function(){
        console.log("Hell")
    }


    return (
        <div className='viewSearch'>
            <label className="form">
                <input 
                type="text" 
                placeholder="&nbsp;" 
                onChange={props.setLocation}
                onKeyDown={handleKeyDown}
                />
                <span className="placeholder">Location</span>
            </label><br/>
            <button className='enter' onClick={handleButtonClick}>
                Enter
            </button>
        </div>
    )
}
