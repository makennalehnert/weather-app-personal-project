import React, {useState, useEffect} from 'react'
import './Weather.css'

export default function Weather({location}){
    const [weather, setWeather] = useState({});

//LA WEATHER
    function LAWeather({weather, setWeather}) {
        useEffect(() => {
       
          const abortController = new AbortController();
      
          async function loadWeather() {
            try {
              const response = await fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FLos_Angeles",
                { signal: abortController.signal }
              );
              const weatherFromAPI = await response.json();
              setWeather(weatherFromAPI);
            } catch (error) {
              if (error.name === "AbortError") {
                console.log("Aborted");
              } else {
                throw error;
              }
            }
          }
          loadWeather();
      
          return () => abortController.abort();
        }, [setWeather]);
 console.log(weather.temperature);
        return (
            <div className="la">
                <h3>Los Angeles Weather</h3>
            </div>
        )
      }
      
//CHICAGO WEATHER

      function ChicagoWeather(){
          return (
              <div className="chicago">
                  <h3>Chicago Weather</h3>
              </div>
          )
          
      }



if (location === 'los angeles'){
    return(
        <>
        <LAWeather weather={weather} setWeather={setWeather}/>
        </>
    )
}else if (location === 'chicago'){
    return(
        <>
        <ChicagoWeather/>
        </>
    )
}else{
    return (

        <div className="weather">
        <h3>Enter a Valid Location</h3>
        <h7>Currently serving: Los Angeles and Chicago</h7>
        </div>
    )
}
}