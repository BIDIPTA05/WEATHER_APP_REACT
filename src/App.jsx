import React, { useState } from "react";
import axios from "axios";

function App() {

  

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=64baddcfdb90bbefc58bc3391c59c643&units=metric`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
       axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
       })
      setLocation('');
    }  
  }



  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyDown={searchLocation}
          />
      </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
          <div className="temp"> 
            {data.main ? <h1>{data.main.temp} °C</h1> : null}
            
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
           </div>
        {data.main !== undefined &&
        
          <div className="bottom">
          <div className="feels">
            <p className="bold"> {data.main ? <p>{data.main.feels_like} °C</p> : null} </p>
            <p>Feels Like</p>
          </div>  
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
          </div>
        }
        
        </div>
    </div>


  )
}

export default App;
