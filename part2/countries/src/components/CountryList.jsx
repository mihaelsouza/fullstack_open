import React from 'react'
import CountryDetails from './CountryDetails';

const CountryList = ({ countries }) => {
  return (
    <div>
      {
        countries.length > 1
          ? countries.map((country) => <li key={country.numericCode}>{country.name}</li>)
          : <CountryDetails country={countries[0]}/>
      }
    </div>
  )
};

export default CountryList;
