import React, { useState, useEffect } from 'react';
import WeatherDetails from './WeatherDetails';

const CountryDetails = ({ country, initialDisplay }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (initialDisplay) setShow(true);
  }, [initialDisplay]);

  return (
    <>
      {
        !initialDisplay ? (
          <div>
            <span>{country.name}</span>
            <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
          </div>
        )
        : <></>
      }
      {
        country && show ? (
          <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt="country flag" width={300} height={200}/>
            <WeatherDetails city={country.capital}/>
          </div>
        ) : <></>
      }
    </>
  )
};

export default CountryDetails;
