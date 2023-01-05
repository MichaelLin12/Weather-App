import Search from './Search.js';
import Display from './Display.js';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [location,setLocation] = useState('');
  const [weather,setWeather] = useState({});
  return (
    <div className='body'>
      <Search
      setLocation={(event)=>{setLocation(event.target.value)}}
      location={location}
      setWeather={setWeather}
      />
      <Display
      weather={weather} 
      />
    </div>
  );
}

export default App;
