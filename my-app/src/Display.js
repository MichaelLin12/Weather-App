import React from 'react'
import './Display.css'

export default function Display(props) {

  const revInfo = function(){
    return(
      <div className='info'>
      <h1>City:</h1>
      <h1>{props.weather.name}</h1>
      <h2>Country:</h2>
      <h2>{props.weather.sys.country}</h2>
      <h4>Longitude:</h4>
      <h4>{props.weather.coord.lon}</h4>
      <h4>Latitude:</h4>
      <h4>{props.weather.coord.lat}</h4>
    </div>
    )
  }

  const moreInfo = function(){
    return(
      <div className='highLow'>
      <div>
        <h1>High</h1>
        <h1>{props.weather.main.temp_max}F</h1>
      </div>
      <div className='spacer'></div>
      <div>
        <h1>Low</h1>
        <h1>{props.weather.main.temp_min}F</h1>
      </div>
    </div>
    )}
  const weatherInfo = function(){
    return (
    <div className='weather'>
      <h1>Temperature</h1>
      <h1>{props.weather.main.temp}F</h1>
      {moreInfo()}
      <h3>Description:</h3>
      <h3>{props.weather.weather[0].description}</h3>
    </div>
  )}

  const addInfo = function(){
    return(
      <div className='additional'>
        <h1>Feels Like</h1>
        <h1>{props.weather.main.feels_like}F</h1>
        <h2>Wind Speed</h2>
        <h2>{props.weather.wind.speed}mph</h2>
        <h4>Humidity:</h4>
        <h4>{props.weather.main.humidity}%</h4>
        <h4>Pressure:</h4>
        <h4>{props.weather.main.pressure}Pa</h4>
      </div>
    )
  }

  const display = function(){
    if(Object.keys(props.weather).length != 0){
      return(
        <div className='viewDisplay'>
          {revInfo()}
          {weatherInfo()}
          {addInfo()}
        </div>
      )}else{
        return(
          <div className='viewDisplay'></div>
        )}
  }

  return (
    <div>
      {display()}
    </div>
  )
}
