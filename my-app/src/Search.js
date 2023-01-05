import React from 'react'
import './Search.css'
import {key} from './Keys'

export default function Search(props) {

    const handleKeyDown = function(event){
        if(event.key==='Enter'){
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.location}&limit=5&APPID=${key}`)
                .then((response)=>response.json())
                .then((user)=>{
                    const lat = user[0].lat;
                    const lon = user[0].lon;
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key}&units=imperial`)
                        .then((response)=>response.json())
                        .then((user)=>{
                            console.log(user)
                            props.setWeather(user)
                        })
                })
        }
    }

    const handleButtonClick = function(){
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.location}&limit=5&APPID=${key}`)
        .then((response)=>response.json())
        .then((user)=>{
            const lat = user[0].lat;
            const lon = user[0].lon;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key}&units=imperial`)
                .then((response)=>response.json())
                .then((user)=>{
                    console.log(user)
                    props.setWeather(user)
                })
        })
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
