import React, { useState, useEffect } from 'react';
import axios from 'axios';

const { REACT_APP_WEATHER_APIKEY } = process.env;

const WeatherDetails = ({ city }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/current?access_key=${REACT_APP_WEATHER_APIKEY}&query=${city}`)
      .then(res => setWeather(res.data));
  }, [city]);

  return (
    <>
      {
        weather ? (
          <div>
            <h3>Weather in {city}</h3>
            <p>{`Temperature ${weather.current.temperature}`}</p>
            <p>{`Wind: ${weather.current.wind_speed} mph direction ${weather.current.wind_dir}`}</p>
            <img
              src={weather.current.weather_icons[0]}
              alt="current weather conditions"
              height={50} width={50}
            />
          </div>
        ) : <></>
      }
    </>
  );
};

export default WeatherDetails;
