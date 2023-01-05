import Search from './Search.js';
import Display from './Display.js';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [location,setLocation] = useState('');
  const getWeather = function(){
    console.log("Weather");
    
  }
  return (
    <div className='body'>
      <Search
      setLocation={(event)=>{setLocation(event.target.value)}}
      getWeather={getWeather}
      />
      <Display />
    </div>
  );
}

export default App;
