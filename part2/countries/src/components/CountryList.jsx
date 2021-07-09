import React from 'react'
import CountryDetails from './CountryDetails';

const CountryList = ({ countries }) => {


  return (
    <div>
      {
        countries.length > 1
          ? countries.map((country) =>
            <div key={country.numericCode}>
              <CountryDetails country={country} initialDisplay={false}/>
            </div>
          )
          : <CountryDetails country={countries[0]} initialDisplay={true}/>
      }
    </div>
  )
};

export default CountryList;
